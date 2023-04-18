import Quiz from '../../domain/entity/Quiz'
import { QuizRepository } from '../../domain/repository/QuizRepository'

export default class QuizRepositoryMemory implements QuizRepository {
  private quizzes: Quiz[]
  constructor() {
    this.quizzes = [
      {
        idQuiz: 1,
        questions: [
          {
            id: 1,
            description: 'JavaScript é legal?',
            correctAnswer: 'a',
            answers: [
              {
                id: 'a',
                description: 'sim',
              },
              {
                id: 'b',
                description: 'não',
              },
            ],
          },
          {
            id: 2,
            description: 'Typescript é melhor que javascript?',
            correctAnswer: 'a',
            answers: [
              {
                id: 'a',
                description: 'sim',
              },
              {
                id: 'b',
                description: 'não',
              },
            ],
          },
        ],
      },
    ]
  }
  async get(idQuiz: number): Promise<Quiz> {
    const quiz = this.quizzes.find((quiz) => quiz.idQuiz === idQuiz)
    if (!quiz) {
      throw new Error('Quiz not found')
    }
    return quiz
  }
}
