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
import { TimeunitType } from "./TimeunitType"

export class RecipedurationType {
  constructor(json: JSON | any) {
    Object.assign(this as RecipedurationType, json)
  }

  decimal?: number
  unit?: TimeunitType
}
