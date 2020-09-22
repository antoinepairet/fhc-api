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
import { FacetDto } from "./FacetDto"
import { MemberInfoDto } from "./MemberInfoDto"

import { decodeBase64 } from "./ModelHelper"

export class MemberDataBatchRequestDto {
  constructor(json: JSON | any) {
    Object.assign(this as MemberDataBatchRequestDto, json)
  }

  facets?: Array<FacetDto>
  members?: Array<MemberInfoDto>
}
