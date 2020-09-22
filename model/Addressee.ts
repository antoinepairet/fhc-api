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
import { IdentifierType } from "./IdentifierType"

import { decodeBase64 } from "./ModelHelper"

export class Addressee {
  constructor(json: JSON | any) {
    Object.assign(this as Addressee, json)
  }

  applicationId?: string
  firstName?: string
  id?: string
  identifierType?: IdentifierType
  lastName?: string
  organizationName?: string
  personInOrganisation?: string
  quality?: string
}
