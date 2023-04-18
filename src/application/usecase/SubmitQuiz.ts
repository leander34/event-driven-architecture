import QuizSubmitted from '../../domain/event/QuizSubmitted'
import Mediator from '../../infra/mediator/Mediator'

export default class SubmitQuiz {
  constructor(
    // private readonly quizRepository: QuizRepository,
    // private readonly mailer: Mailer = new MailerMemory(),
    private readonly mediator: Mediator
  ) {}
  async execute(input: Input): Promise<void> {
    const event = new QuizSubmitted(
      input.idQuiz,
      input.name,
      input.email,
      input.answers
    )
    this.mediator.publish(event)
    // const quiz = await this.quizRepository.get(input.idQuiz)
    // let correctAnswers = 0
    // for (const question of quiz.questions) {
    //   if (input.answers[question.id] === question.correctAnswer) {
    //     correctAnswers++
    //   }
    // }

    // const grade = (correctAnswers / quiz.questions.length) * 100
    // const message = `Olá ${input.name}, sua nota do quiz é ${grade}`
    // await this.mailer.send(input.email, message)
    // return {
    //   grade,
    // }
  }
}

type Input = {
  name: string
  email: string
  idQuiz: number
  answers: { [id: number]: string }
}

// type Output = {
//   grade: number
// }
