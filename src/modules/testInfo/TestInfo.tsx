import React from 'react'
import './TestInfo.scss'
import { useTypedSelector } from '../../hooks';

function TestInfo() {

  const currentQuestion = useTypedSelector((state) => state.tests.currentQuestion);

  return (
    <div className='testInfo'>
        <div className="testInfo__row">
            <p className="testInfo__title">
                Входное тестирование
            </p>
            <div className="testInfo__currentQuestion">
                {String(currentQuestion)}
            </div>
        </div>
        <div className="testInfo__separator">

        </div>
    </div>
  )
}

export {TestInfo}
