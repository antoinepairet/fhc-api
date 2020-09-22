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
import { Base64EncryptedValueType } from "./Base64EncryptedValueType"
import { CDENCRYPTIONMETHOD } from "./CDENCRYPTIONMETHOD"

import { decodeBase64 } from "./ModelHelper"

export class Base64EncryptedDataType {
  constructor(json: JSON | any) {
    Object.assign(this as Base64EncryptedDataType, json)
  }

  base64EncryptedValue?: Base64EncryptedValueType
  cd?: CDENCRYPTIONMETHOD
}
