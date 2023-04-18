import { DomainEvent } from './DomainEvent'

export default class QuizCorrected implements DomainEvent {
  name: string = 'QuizCorrected'
  constructor(
    public readonly userName: string,
    public readonly email: string,
    public readonly grade: number
  ) {}
}
