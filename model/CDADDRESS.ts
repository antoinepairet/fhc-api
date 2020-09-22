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

export class CDADDRESS {
  constructor(json: JSON | any) {
    Object.assign(this as CDADDRESS, json)
  }

  dn?: string
  l?: string
  s?: CDADDRESS.SEnum
  sl?: string
  sv?: string
  value?: string
}
export namespace CDADDRESS {
  export type SEnum = "CD_ADDRESS" | "LOCAL"
  export const SEnum = {
    CDADDRESS: "CD_ADDRESS" as SEnum,
    LOCAL: "LOCAL" as SEnum
  }
}
