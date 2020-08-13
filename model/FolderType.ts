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
import { ConfidentialityType } from "./ConfidentialityType"
import { IDKMEHR } from "./IDKMEHR"
import { LnkType } from "./LnkType"
import { PersonType } from "./PersonType"
import { TextType } from "./TextType"
import { TransactionType } from "./TransactionType"

export class FolderType {
  constructor(json: JSON | any) {
    Object.assign(this as FolderType, json)
  }

  confidentiality?: ConfidentialityType
  ids?: Array<IDKMEHR>
  lnks?: Array<LnkType>
  patient?: PersonType
  texts?: Array<TextType>
  transactions?: Array<TransactionType>
}
