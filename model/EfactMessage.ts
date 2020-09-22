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
import { CommonOutput } from "./CommonOutput"
import { Record } from "./Record"
import { TAck } from "./TAck"

import { decodeBase64 } from "./ModelHelper"

export class EfactMessage {
  constructor(json: JSON | any) {
    Object.assign(this as EfactMessage, json)
  }

  commonOutput?: CommonOutput
  detail?: string
  hashValue?: string
  id?: string
  message?: Array<Record>
  name?: string
  tack?: TAck
  xades?: string
}
