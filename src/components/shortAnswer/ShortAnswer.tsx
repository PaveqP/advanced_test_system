import React, { FC, useState } from 'react'
import './ShortAnswer.scss'
import { SetCurrentAnswer } from '../../store/testReducer'
import { store } from '../../store'

interface IShortAnswer {
	trueCase: string,
  points: number
}
const ShortAnswer: FC<IShortAnswer> = ({trueCase}) => {

	const [currentAnswer, setCurrentAnswer] = useState<string[]>([])

	const handleSetCurrentAnswer = (answer: string) => {
		store.dispatch(SetCurrentAnswer([answer]));
		setCurrentAnswer([answer]);
	};

  return (
    <div className='shortAnswer'>
		  <input type="text" className="shortAnswer-input" placeholder='Введите ответ' onChange={(e) => handleSetCurrentAnswer(e.target.value)}/>
    </div>
  )
}

export {ShortAnswer}
