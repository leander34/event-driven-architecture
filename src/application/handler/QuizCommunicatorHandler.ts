import { DomainEvent } from '../../domain/event/DomainEvent'
import QuizCorrected from '../../domain/event/QuizCorrected'
import { Mailer } from '../service/Mailer'
import { Handler } from './Handler'

export default class QuizCommunicatorHandler implements Handler {
  eventName: string = 'QuizCorrected'
  constructor(private readonly mailer: Mailer) {}
  async handle(event: QuizCorrected): Promise<void> {
    this.mailer.send(
      event.email,
      `Olá ${event.userName}, sua nota do quiz é ${event.grade}`
    )
  }
}
