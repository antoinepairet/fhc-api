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
import { CDMESSAGE } from "./CDMESSAGE"

export class Specialisation {
  constructor(json: JSON | any) {
    Object.assign(this as Specialisation, json)
  }

  cd?: CDMESSAGE
  version?: string
}
