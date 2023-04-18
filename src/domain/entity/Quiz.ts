export default class Quiz {
  constructor(
    public readonly idQuiz: number,
    public readonly questions: {
      id: number
      description: string
      correctAnswer: string
      answers: { id: string; description: string }[]
    }[]
  ) {}
}
