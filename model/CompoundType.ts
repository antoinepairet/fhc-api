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
import { IDKMEHR } from "./IDKMEHR"
import { MedicinalProductType } from "./MedicinalProductType"
import { QuantityType } from "./QuantityType"
import { Quantityprefix } from "./Quantityprefix"
import { SubstanceType } from "./SubstanceType"

import { decodeBase64 } from "./ModelHelper"

export class CompoundType {
  constructor(json: JSON | any) {
    Object.assign(this as CompoundType, json)
  }

  ids?: Array<IDKMEHR>
  medicinalproduct?: MedicinalProductType
  quantity?: QuantityType
  quantityprefix?: Quantityprefix
  substance?: SubstanceType
}
