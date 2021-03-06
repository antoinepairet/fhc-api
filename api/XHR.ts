export namespace XHR {
  export class Header {
    header: string
    data: string

    constructor(header: string, data: string) {
      this.header = header
      this.data = data
    }
  }

  export class Data {
    status: number
    contentType: string
    body: JSON | Array<JSON> | any //stream bytes|json|array<json>

    constructor(status: number, contentType: string, body: JSON | Array<JSON> | any) {
      this.status = status
      this.contentType = contentType
      this.body = body
    }
  }

  export class XHRError extends Error {
    status: number
    code: number
    headers: Headers

    constructor(message: string, status: number, code: number, headers: Headers) {
      super(message)
      this.status = status
      this.code = code
      this.headers = headers
    }
  }

  function fetchWithTimeout(
    url: string,
    init: RequestInit,
    timeout = 10000,
    fetchImpl: (input: RequestInfo, init?: RequestInit) => Promise<Response> = typeof window !==
    "undefined"
      ? window.fetch
      : typeof self !== "undefined"
        ? self.fetch
        : fetch
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      // Set timeout timer
      let timer = setTimeout(
        () => reject({ message: "Request timed out", status: "Request timed out" }),
        timeout
      )
      fetchImpl(url, init)
        .then(response => {
          clearTimeout(timer)
          resolve(response)
        })
        .catch(err => {
          clearTimeout(timer)
          reject(err)
        })
    })
  }

  export function sendCommand(
    method: string,
    url: string,
    headers: Array<Header> | null,
    data: string | any = "",
    fetchImpl: (input: RequestInfo, init?: RequestInit) => Promise<Response> = typeof window !==
    "undefined"
      ? window.fetch
      : typeof self !== "undefined"
        ? self.fetch
        : fetch,
    contentTypeOverride?: "application/json" | "text/plain" | "application/octet-stream"
  ): Promise<Data> {
    const contentType =
      headers &&
      headers.find(it => (it.header ? it.header.toLowerCase() === "content-type" : false))
    const clientTimeout =
      headers &&
      headers.find(it => (it.header ? it.header.toUpperCase() === "X-CLIENT-SIDE-TIMEOUT" : false))
    const timeout = clientTimeout ? Number(clientTimeout.data) : 600000
    return fetchWithTimeout(
      url,
      Object.assign(
        {
          method: method,
          credentials: "same-origin",
          headers:
            (headers &&
              headers
                .filter(
                  h =>
                    (h.header.toLowerCase() !== "content-type" ||
                      h.data !== "multipart/form-data") &&
                    h.header.toUpperCase() !== "X-CLIENT-SIDE-TIMEOUT"
                )
                .reduce((acc: { [key: string]: string }, h) => {
                  acc[h.header] = h.data
                  return acc
                }, {})) ||
            {}
        },
        method === "POST" || method === "PUT"
          ? {
              body:
                (!contentType || contentType.data) === "application/json"
                  ? JSON.stringify(data)
                  : data
            }
          : {}
      ),
      timeout,
      fetchImpl
    ).then(function(response) {
      if (response.status >= 400) {
        throw new XHRError(response.statusText, response.status, response.status, response.headers)
      }
      const ct = contentTypeOverride || response.headers.get("content-type") || "text/plain"
      return (ct.startsWith("application/octet-stream")
        ? response.arrayBuffer
          ? response.arrayBuffer()
          : response.blob().then(blob => new Response(blob).arrayBuffer())
        : ct.startsWith("application/json")
          ? response.json()
          : response.text()
      ).then(d => new Data(response.status, ct, d))
    })
  }
}
