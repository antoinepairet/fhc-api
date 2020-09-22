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

export class GenderType {
  constructor(json: JSON | any) {
    Object.assign(this as GenderType, json)
  }

  genderCode?: string
  modificationDate?: string
  origin?: GenderType.OriginEnum
  startDate?: Date
  value?: GenderType.ValueEnum
}
export namespace GenderType {
  export type OriginEnum = "BCSS_KSZ" | "RN_RR"
  export const OriginEnum = {
    BCSSKSZ: "BCSS_KSZ" as OriginEnum,
    RNRR: "RN_RR" as OriginEnum
  }
  export type ValueEnum = "MALE" | "FEMALE" | "UNKNOWN"
  export const ValueEnum = {
    MALE: "MALE" as ValueEnum,
    FEMALE: "FEMALE" as ValueEnum,
    UNKNOWN: "UNKNOWN" as ValueEnum
  }
}
