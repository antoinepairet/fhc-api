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
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as models from "./models"

export class CDTRANSACTION {
  constructor(json: JSON | any) {
    Object.assign(this as CDTRANSACTION, json)
  }
  dn?: string

  l?: string

  s?: CDTRANSACTION.SEnum

  sl?: string

  sv?: string

  value?: string
}
export namespace CDTRANSACTION {
  export enum SEnum {
    CDTRANSACTION = <any>"CD_TRANSACTION",
    CDTRANSACTIONCARENET = <any>"CD_TRANSACTION_CARENET",
    CDTRANSACTIONMAA = <any>"CD_TRANSACTION_MAA",
    CDCHAPTER4APPENDIX = <any>"CD_CHAPTER_4_APPENDIX",
    CDTRANSACTIONREG = <any>"CD_TRANSACTION_REG",
    CDTRANSACTIONMYCARENET = <any>"CD_TRANSACTION_MYCARENET",
    CDTRANSACTIONTYPE = <any>"CD_TRANSACTION_TYPE",
    CDHUBSERVICE = <any>"CD_HUBSERVICE",
    CDDIARY = <any>"CD_DIARY",
    LOCAL = <any>"LOCAL"
  }
}
