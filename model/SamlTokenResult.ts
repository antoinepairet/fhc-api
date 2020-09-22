/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { decodeBase64 } from "./ModelHelper"

export class SamlTokenResult {
  constructor(json: JSON | any) {
    Object.assign(this as SamlTokenResult, json)
  }

  quality?: string
  timestamp?: number
  token?: string
  tokenId?: string
  validity?: number
}
