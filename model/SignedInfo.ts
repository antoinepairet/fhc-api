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
import { CanonicalizationMethod } from "./CanonicalizationMethod"
import { Reference } from "./Reference"
import { SignatureMethod } from "./SignatureMethod"

import { decodeBase64 } from "./ModelHelper"

export class SignedInfo {
  constructor(json: JSON | any) {
    Object.assign(this as SignedInfo, json)
  }

  canonicalizationMethod?: CanonicalizationMethod
  id?: string
  references?: Array<Reference>
  signatureMethod?: SignatureMethod
}
