import { expect, test, vi } from 'vitest'
import SubmitQuiz from '../src/application/usecase/SubmitQuiz'
import QuizRepositoryMemory from '../src/infra/repository/QuizRepositoryMemory'
import MailerMemory from '../src/infra/service/MailerMemory'
import Mediator from '../src/infra/mediator/Mediator'
import QuizCorrectorHanlder from '../src/application/handler/QuizCorrectorHandler'
import QuizCommunicatorHandler from '../src/application/handler/QuizCommunicatorHandler'

// test('Um usuário deve submeter um quiz respondido e a nota deve ser calculada', async () => {
//   const quizRepository = new QuizRepositoryMemory()
//   const submitQuiz = new SubmitQuiz(quizRepository)
//   const input = {
//     name: 'John Doe',
//     email: 'john.doe@gmail.com',
//     idQuiz: 1,
//     answers: {
//       1: 'a',
//       2: 'b',
//     },
//   }
//   const output = await submitQuiz.execute(input)
//   expect(output.grade).toBe(50)
// })

test('Um usuário deve submeter um quiz respondido e a nota deve ser calculada e uma notificação por e-mail', async () => {
  const mediator = new Mediator()
  const quizRepository = new QuizRepositoryMemory()
  const quizCorrectorHanlder = new QuizCorrectorHanlder(
    quizRepository,
    mediator
  )
  mediator.register(quizCorrectorHanlder)
  const mailer = new MailerMemory()
  const mailerSpy = vi.spyOn(mailer, 'send')

  const quizCommunicatorHandler = new QuizCommunicatorHandler(mailer)
  mediator.register(quizCommunicatorHandler)
  const submitQuiz = new SubmitQuiz(mediator)
  const input = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    idQuiz: 1,
    answers: {
      1: 'a',
      2: 'b',
    },
  }
  await submitQuiz.execute(input)
  expect(mailer.messages[0].message).toBe('Olá John Doe, sua nota do quiz é 50')
  expect(mailerSpy).toBeCalledTimes(1)
})
