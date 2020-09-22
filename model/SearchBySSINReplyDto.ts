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
import { ConsultRnPersonDto } from "./ConsultRnPersonDto"
import { ErrorType } from "./ErrorType"
import { StatusDto } from "./StatusDto"

import { decodeBase64 } from "./ModelHelper"

export class SearchBySSINReplyDto {
  constructor(json: JSON | any) {
    Object.assign(this as SearchBySSINReplyDto, json)
  }

  errorInformations?: Array<ErrorType>
  id?: string
  person?: ConsultRnPersonDto
  status?: StatusDto
}
