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
import { ExistingPersonsType } from "./ExistingPersonsType"
import { PersonResponseType } from "./PersonResponseType"

import { decodeBase64 } from "./ModelHelper"

export class ResultType {
  constructor(json: JSON | any) {
    Object.assign(this as ResultType, json)
  }

  existingPersons?: ExistingPersonsType
  newlyRegisteredPerson?: PersonResponseType
}
