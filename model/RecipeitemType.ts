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
import { Posology } from "./Posology"
import { RecipeCDITEM } from "./RecipeCDITEM"
import { RecipebasicIDKMEHR } from "./RecipebasicIDKMEHR"
import { RecipecontentType } from "./RecipecontentType"
import { RecipedurationType } from "./RecipedurationType"
import { RecipefrequencyType } from "./RecipefrequencyType"
import { RecipelifecycleType } from "./RecipelifecycleType"
import { RecipemomentType } from "./RecipemomentType"
import { RecipequantityType } from "./RecipequantityType"
import { ReciperenewalType } from "./ReciperenewalType"
import { ReciperouteType } from "./ReciperouteType"
import { RecipetemporalityType } from "./RecipetemporalityType"
import { Regimen } from "./Regimen"
import { TextType } from "./TextType"
import { XMLGregorianCalendar } from "./XMLGregorianCalendar"

export class RecipeitemType {
  constructor(json: JSON | any) {
    Object.assign(this as RecipeitemType, json)
  }

  beginmoment?: RecipemomentType
  cd?: RecipeCDITEM
  content?: RecipecontentType
  deliverydate?: XMLGregorianCalendar
  duration?: RecipedurationType
  endmoment?: RecipemomentType
  frequency?: RecipefrequencyType
  id?: RecipebasicIDKMEHR
  instructionforpatient?: TextType
  instructionforreimbursement?: TextType
  issubstitutionallowed?: boolean
  lifecycle?: RecipelifecycleType
  posology?: Posology
  quantity?: RecipequantityType
  regimen?: Regimen
  renewal?: ReciperenewalType
  route?: ReciperouteType
  temporality?: RecipetemporalityType
}
