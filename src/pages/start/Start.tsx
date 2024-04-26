import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Start.scss'

interface IStart{
  testStarted: boolean
}

const Start:FC<IStart> = ({testStarted}) => {
  return (
    <div className='start'>
      {testStarted ?
        <div className="start__firstEntry">
          <Link to={'/test'}>
              <button className='start__button'>Продолжить тестирование</button>
          </Link>
          <p className='start__warning'>*Вы уже начали проходить тестирование.</p>
        </div>
        :
        <div className="start__firstEntry">
          <Link to={'/test'}>
              <button className='start__button'>Начать тестирование</button>
          </Link>
          <p className='start__warning'>*Тестирование ограничено по времени. После отправки ответа, изменить его будет невозможно.</p>
        </div>
      }
    </div>
  )
}

export {Start}