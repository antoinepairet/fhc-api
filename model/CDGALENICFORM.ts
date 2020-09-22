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

export class CDGALENICFORM {
  constructor(json: JSON | any) {
    Object.assign(this as CDGALENICFORM, json)
  }

  dn?: string
  l?: string
  s?: CDGALENICFORM.SEnum
  sv?: string
  value?: string
}
export namespace CDGALENICFORM {
  export type SEnum = "CD_DRUG_PRESENTATION" | "CD_MAGISTRALFORM"
  export const SEnum = {
    DRUGPRESENTATION: "CD_DRUG_PRESENTATION" as SEnum,
    MAGISTRALFORM: "CD_MAGISTRALFORM" as SEnum
  }
}
