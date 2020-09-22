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
import { AuthorDto } from "./AuthorDto"
import { HcPartyIdDto } from "./HcPartyIdDto"

import { decodeBase64 } from "./ModelHelper"

export class HcPartyConsentDto {
  constructor(json: JSON | any) {
    Object.assign(this as HcPartyConsentDto, json)
  }

  author?: AuthorDto
  hcparty?: HcPartyIdDto
  hubId?: string
  revokedate?: number
  signdate?: number
}
