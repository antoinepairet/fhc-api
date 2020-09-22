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
import { AuthorType } from "./AuthorType"
import { IDKMEHR } from "./IDKMEHR"
import { RequestType } from "./RequestType"

import { decodeBase64 } from "./ModelHelper"

export class ResponseType {
  constructor(json: JSON | any) {
    Object.assign(this as ResponseType, json)
  }

  author?: AuthorType
  date?: Date
  id?: IDKMEHR
  request?: RequestType
  time?: Date
}
