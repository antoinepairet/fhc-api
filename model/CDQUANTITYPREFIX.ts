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

export class CDQUANTITYPREFIX {
  constructor(json: JSON | any) {
    Object.assign(this as CDQUANTITYPREFIX, json)
  }

  dn?: string
  l?: string
  s?: string
  sv?: string
  value?: CDQUANTITYPREFIX.ValueEnum
}
export namespace CDQUANTITYPREFIX {
  export type ValueEnum = "ANA" | "ANAAD" | "AD" | "QS"
  export const ValueEnum = {
    ANA: "ANA" as ValueEnum,
    ANAAD: "ANAAD" as ValueEnum,
    AD: "AD" as ValueEnum,
    QS: "QS" as ValueEnum
  }
}
