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

export class CDUNIT {
  constructor(json: JSON | any) {
    Object.assign(this as CDUNIT, json)
  }

  dn?: string
  l?: string
  s?: CDUNIT.SEnum
  sv?: string
  value?: string
}
export namespace CDUNIT {
  export type SEnum = "CD_UNIT" | "CD_CURRENCY" | "UCUM" | "CD_TIMEUNIT"
  export const SEnum = {
    CDUNIT: "CD_UNIT" as SEnum,
    CDCURRENCY: "CD_CURRENCY" as SEnum,
    UCUM: "UCUM" as SEnum,
    CDTIMEUNIT: "CD_TIMEUNIT" as SEnum
  }
}
