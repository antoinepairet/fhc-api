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
import { PeriodDto } from "./PeriodDto"

export class InsurabilityItemDto {
  constructor(json: JSON | any) {
    Object.assign(this as InsurabilityItemDto, json)
  }

  ct1?: string
  ct2?: string
  insurabilityDate?: number
  mutuality?: string
  paymentApproval?: string
  period?: PeriodDto
  regNrWithMut?: string
}
