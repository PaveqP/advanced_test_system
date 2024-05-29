import React, { FC, useEffect, useState } from 'react'
import './ShortAnswer.scss'
import { GetAnswers } from '../../utils'
import { useActions } from '../../hooks'

const ShortAnswer: FC = () => {

	const dispatch = useActions()

	const [selectedAnswer, setSelectedAnswer] = useState<string[]>(GetAnswers());

	console.log(selectedAnswer)

	const handleSetCurrentAnswer = (answer: string) => {
		setSelectedAnswer([answer]);
	};

	useEffect(() => {
        dispatch.setCurrentAnswer(selectedAnswer);
    }, [selectedAnswer]);

  return (
    <div className='shortAnswer'>
		  <input type="text" className="shortAnswer-input" placeholder='Введите ответ' value={selectedAnswer[0]} onChange={(e) => handleSetCurrentAnswer(e.target.value)}/>
    </div>
  )
}

export {ShortAnswer}
