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
import { AcknowledgeType } from "./AcknowledgeType"
import { ResponseType } from "./ResponseType"
import { TransactionIdType } from "./TransactionIdType"

export class PutTransactionSetResponse {
  constructor(json: JSON | any) {
    Object.assign(this as PutTransactionSetResponse, json)
  }

  acknowledge?: AcknowledgeType
  response?: ResponseType
  transactions?: Array<TransactionIdType>
}
