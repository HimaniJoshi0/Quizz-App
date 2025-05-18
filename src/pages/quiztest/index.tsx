import useStore from '@/lib/store/store'
import React, { useState } from 'react'

const Quiztest = () => {
  const { quizzData } = useStore()
  const [showResults, setSHowResults] = useState(false)
  const [answers, setAnswers] = useState<{ [questionId: number]: number | undefined }>({})

  const handleOptionChange = (questionId: number, optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Selected Answers:', answers)
    setSHowResults(true)
    // You can handle answer submission here
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {quizzData?.topic}
        {quizzData?.questions.map((question, idx) => (
          <div key={question.id} style={{ marginBottom: '1.5rem' }}>
            <h3>{`Q${idx + 1}. ${question.text}`}</h3>
            <ul>
              {question.options.map((option) => (
                <li key={option.id} 
                >
                  <label className={showResults? option.isCorrect? "border border-green-500": answers[question.id] === option.id ? "border border-red-500" : "" : ""}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={answers[question.id] === option.id}
                      onChange={() => handleOptionChange(question.id, option.id)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Quiztest