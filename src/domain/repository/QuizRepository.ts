import Quiz from '../entity/Quiz'

export interface QuizRepository {
  get(idQuiz: number): Promise<Quiz>
}
