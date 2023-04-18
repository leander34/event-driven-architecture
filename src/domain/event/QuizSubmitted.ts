import { DomainEvent } from './DomainEvent'

export default class QuizSubmitted implements DomainEvent {
  name = 'QuizSubmitted'

  constructor(
    public readonly idQuiz: number,
    public readonly userName: string,
    public readonly email: string,
    public readonly answers: { [id: number]: string }
  ) {}
}
