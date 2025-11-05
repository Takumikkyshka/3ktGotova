import { useEffect, useState } from "react"

export default function QuizSingleAnswer({ correctAnswer, question, variants }) {

    const [userAnswer, setUserAnswer] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        if (userAnswer == correctAnswer) {
            setResult('Верно!')
        } else {
            setResult('Неверно!')
        }
    }, [userAnswer])


    return (
        <div className="mb-10">
            <h3 className="mb-5">{question}</h3>
            <div className="mb-5">
                {
                    variants.map(variant => (
                        <label className="pr-2.5">
                            <input type="radio" name="group1" onChange={() => setUserAnswer(variant)} />
                            {variant}
                        </label>
                    ))
                }
            </div>
            <p>{result}</p>
        </div>
    )

}