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

export class ErrorDto {
  constructor(json: JSON | any) {
    Object.assign(this as ErrorDto, json)
  }

  code?: string
  codeDescription?: { [key: string]: string }
  descr?: string
  url?: string
  zone?: string
}
