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
import { Feedback } from "./Feedback"

import { decodeBase64 } from "./ModelHelper"

export class PrescriptionFullWithFeedback {
  constructor(json: JSON | any) {
    Object.assign(this as PrescriptionFullWithFeedback, json)
  }

  creationDate?: Date
  deliverableFrom?: Date
  deliverableTo?: Date
  encryptionKeyId?: string
  feedbackAllowed?: boolean
  feedbacks?: Array<Feedback>
  fullAuthorName?: string
  medicines?: Array<string>
  nihii?: string
  notificationWasSent?: boolean
  patientId?: string
  patientName?: string
  rid?: string
}
