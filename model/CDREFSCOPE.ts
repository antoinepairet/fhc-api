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

export class CDREFSCOPE {
  constructor(json: JSON | any) {
    Object.assign(this as CDREFSCOPE, json)
  }

  dn?: string
  l?: string
  s?: string
  sv?: string
  value?: CDREFSCOPE.ValueEnum
}
export namespace CDREFSCOPE {
  export type ValueEnum = "AGE" | "SEX" | "GESTATIONNAL"
  export const ValueEnum = {
    AGE: "AGE" as ValueEnum,
    SEX: "SEX" as ValueEnum,
    GESTATIONNAL: "GESTATIONNAL" as ValueEnum
  }
}
