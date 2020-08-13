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
import { Paginationresponseinfo } from "./Paginationresponseinfo"
import { RequestListType } from "./RequestListType"

export class ResponseListType {
  constructor(json: JSON | any) {
    Object.assign(this as ResponseListType, json)
  }

  author?: AuthorType
  date?: Date
  id?: IDKMEHR
  paginationinfo?: Paginationresponseinfo
  request?: RequestListType
  time?: Date
}
