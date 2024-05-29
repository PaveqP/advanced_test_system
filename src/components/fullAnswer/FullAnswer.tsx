import React, { FC, useEffect, useState } from 'react'
import './FullAnswer.scss'
import { GetAnswers } from '../../utils';
import { useActions } from '../../hooks'

const FullAnswer: FC = () => {

  const dispatch = useActions()

  const [selectedAnswer, setSelectedAnswer] = useState<string[]>(GetAnswers());

  const handleSetCurrentAnswer = (answer: string) => {
		setSelectedAnswer([answer]);
	};

  useEffect(() => {
    dispatch.setCurrentAnswer(selectedAnswer);
}, [selectedAnswer]);

  return (
    <div className='fullAnswer'>
      <p className='fullAnswer-comment'>*Полный ответ не проверяется автоматически</p>
		  <textarea className="fullAnswer-input" value={selectedAnswer[0]} onChange={(e) => handleSetCurrentAnswer(e.target.value)} placeholder='Введите ответ'/>
    </div>
  )
}

export {FullAnswer}
