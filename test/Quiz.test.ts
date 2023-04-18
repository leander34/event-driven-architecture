import { expect, test } from 'vitest'
import Quiz from '../src/domain/entity/Quiz'
const questions = [
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
]

test('', () => {
  const quiz = new Quiz(1, questions)
  expect(quiz.idQuiz).toBe(1)
  expect(quiz.questions[0].id).toBe(1)
  expect(quiz.questions).toHaveLength(2)
})
