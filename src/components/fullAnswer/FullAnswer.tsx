import React, { FC } from 'react'
import './FullAnswer.scss'

interface IShortAnswer {
	trueCase: string,
  points: number
}
const FullAnswer: FC<IShortAnswer> = ({trueCase}) => {
  return (
    <div className='fullAnswer'>
      <p className='fullAnswer-comment'>*Полный ответ не проверяется автоматически</p>
		  <textarea className="fullAnswer-input" placeholder='Введите ответ'/>
    </div>
  )
}

export {FullAnswer}
