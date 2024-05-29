import React, { FC } from 'react'
import './FullAnswer.scss'

const FullAnswer: FC = () => {
  return (
    <div className='fullAnswer'>
      <p className='fullAnswer-comment'>*Полный ответ не проверяется автоматически</p>
		  <textarea className="fullAnswer-input" placeholder='Введите ответ'/>
    </div>
  )
}

export {FullAnswer}
