import React, { FC, useState } from 'react'
import './ShortAnswer.scss'
import { useActions } from '../../hooks'

const ShortAnswer: FC = () => {

	const dispatch = useActions()

	const [currentAnswer, setCurrentAnswer] = useState<string[]>([])

	const handleSetCurrentAnswer = (answer: string) => {
		dispatch.setCurrentAnswer([answer])
		setCurrentAnswer([answer]);
	};

  return (
    <div className='shortAnswer'>
		  <input type="text" className="shortAnswer-input" placeholder='Введите ответ' onChange={(e) => handleSetCurrentAnswer(e.target.value)}/>
    </div>
  )
}

export {ShortAnswer}
