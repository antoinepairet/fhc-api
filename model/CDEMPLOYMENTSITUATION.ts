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

export class CDEMPLOYMENTSITUATION {
  constructor(json: JSON | any) {
    Object.assign(this as CDEMPLOYMENTSITUATION, json)
  }

  dn?: string
  l?: string
  s?: string
  sl?: string
  sv?: string
  value?: CDEMPLOYMENTSITUATION.ValueEnum
}
export namespace CDEMPLOYMENTSITUATION {
  export type ValueEnum = "SELFEMPLOYED" | "EMPLOYED" | "CIVILSERVANT"
  export const ValueEnum = {
    SELFEMPLOYED: "SELFEMPLOYED" as ValueEnum,
    EMPLOYED: "EMPLOYED" as ValueEnum,
    CIVILSERVANT: "CIVILSERVANT" as ValueEnum
  }
}
