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

export class RecipeCDINNCLUSTER {
  constructor(json: JSON | any) {
    Object.assign(this as RecipeCDINNCLUSTER, json)
  }

  dn?: string
  l?: string
  s?: RecipeCDINNCLUSTER.SEnum
  sv?: string
  value?: string
}
export namespace RecipeCDINNCLUSTER {
  export type SEnum = "CD_INNCLUSTER" | "CD_VMPGROUP"
  export const SEnum = {
    INNCLUSTER: "CD_INNCLUSTER" as SEnum,
    VMPGROUP: "CD_VMPGROUP" as SEnum
  }
}
