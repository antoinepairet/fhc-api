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

export class CDINCAPACITYREASON {
  constructor(json: JSON | any) {
    Object.assign(this as CDINCAPACITYREASON, json)
  }

  dn?: string
  l?: string
  s?: string
  sv?: string
  value?: CDINCAPACITYREASON.ValueEnum
}
export namespace CDINCAPACITYREASON {
  export type ValueEnum =
    | "SICKNESS"
    | "ACCIDENT"
    | "FAMILY"
    | "OTHER"
    | "CAREENCOUNTER"
    | "ILLNESS"
    | "HOSPITALISATION"
    | "PREGNANCY"
    | "WORKACCIDENT"
    | "OCCUPATIONALDISEASE"
    | "TRAVELTOFROMWORKACCIDENT"
  export const ValueEnum = {
    SICKNESS: "SICKNESS" as ValueEnum,
    ACCIDENT: "ACCIDENT" as ValueEnum,
    FAMILY: "FAMILY" as ValueEnum,
    OTHER: "OTHER" as ValueEnum,
    CAREENCOUNTER: "CAREENCOUNTER" as ValueEnum,
    ILLNESS: "ILLNESS" as ValueEnum,
    HOSPITALISATION: "HOSPITALISATION" as ValueEnum,
    PREGNANCY: "PREGNANCY" as ValueEnum,
    WORKACCIDENT: "WORKACCIDENT" as ValueEnum,
    OCCUPATIONALDISEASE: "OCCUPATIONALDISEASE" as ValueEnum,
    TRAVELTOFROMWORKACCIDENT: "TRAVELTOFROMWORKACCIDENT" as ValueEnum
  }
}
