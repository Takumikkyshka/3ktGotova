import React, { useEffect, useState } from "react";

export default function CreateMultipleQuestion({question, editQuestion}) {

    function editOption(value, index){
        const options = question.options
        options[index] = value


        editQuestion(question.id, options, 'options')
    }

    const [checkedAnswers, setCheckedAnswers] = useState([])

    function checkAnswer(answer) {
        if (checkedAnswers.includes(answer)) {
            setCheckedAnswers(
                checkedAnswers.filter(userAnswer => userAnswer !== answer)
            )
        } else {
            setCheckedAnswers(
                [
                    ...checkedAnswers,
                    answer
                ]
            )
        }
    }

    useEffect(() => {
      editQuestion(question.id, checkedAnswers, 'correctAnswer')
    },[checkedAnswers])


  return (
    <div>
        <label>
            <p>Введите вопрос</p>
            <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, "question")} type="text" placeholder="Вопрос" />
        </label>

        <div className="flex flex-col gap-y-2">
            {
                question.options.map((option, index) => (
                <div className="flex gap-x-3">
                    <input type='text' className="bg-blue-400 p-1" value={option} placeholder={`Вариант ${index + 1}`} onInput={(e) => editOption(e.target.value, index)} />
                    <label className="flex gap-x-2 check_answer noselect">
                      <input hidden type="checkbox" onChange={() => checkAnswer(option)}/>
                      <p className="px-2.5 py-2.5">Правильный ответ</p>
                    </label>
                </div>
                ))
            }
        </div>

            <p>Правильный ответ</p>
            <ul>
              {
              typeof question.correctAnswer === 'object' &&
              question.correctAnswer.map(answer => (
                <li>{answer}</li>
              ))
              }
            </ul>

        <div>
            <button onClick={() => {editQuestion(question.id, [...question.options, ''], 'options')}}>Добавить вариант ответа</button>
        </div>

    </div>
  );
}
