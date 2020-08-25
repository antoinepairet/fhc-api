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
import { CountryType } from "./CountryType"
import { MunicipalityType } from "./MunicipalityType"
import { StreetType } from "./StreetType"

export class StandardAddressType {
  constructor(json: JSON | any) {
    Object.assign(this as StandardAddressType, json)
  }

  box?: string
  country?: CountryType
  housenumber?: string
  municipality?: MunicipalityType
  street?: StreetType
}