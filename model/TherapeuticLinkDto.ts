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
import { HcPartyDto } from "./HcPartyDto"
import { KmehrPatientDto } from "./KmehrPatientDto"

export class TherapeuticLinkDto {
  constructor(json: JSON | any) {
    Object.assign(this as TherapeuticLinkDto, json)
  }

  comment?: string
  endDate?: number
  hcParty?: HcPartyDto
  patient?: KmehrPatientDto
  startDate?: number
  status?: string
  type?: string
}
