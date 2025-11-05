import React from "react";

export default function CreateSingleQuestion({question, editQuestion}) {

    function editOption(value, index){
        const options = question.options
        options[index] = value


        editQuestion(question.id, options, 'options')
    }

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
                    <button className="text-sm border p1 border-cyan-300" onClick={() => {editQuestion(question.id, option, 'correctAnswer')}}>Отметить правильный ответ</button>
                </div>
                ))
            }
        </div>

            <p>Правильный ответ</p>
            <p>{question.correctAnswer}</p>

        <div>
            <button onClick={() => {editQuestion(question.id, [...question.options, ''], 'options')}}>Добавить вариант ответа</button>
        </div>

    </div>
  );
}
