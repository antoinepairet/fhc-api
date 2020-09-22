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
import { ContentlocalitemattributeType } from "./ContentlocalitemattributeType"
import { IDKMEHR } from "./IDKMEHR"
import { LOCAL } from "./LOCAL"

import { decodeBase64 } from "./ModelHelper"

export class LocalitemattributeType {
  constructor(json: JSON | any) {
    Object.assign(this as LocalitemattributeType, json)
  }

  cd?: LOCAL
  content?: ContentlocalitemattributeType
  ids?: Array<IDKMEHR>
}
