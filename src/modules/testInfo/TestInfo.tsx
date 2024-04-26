import React from 'react'
import './TestInfo.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function TestInfo() {

  const currentQuestion = useSelector((state: RootState) => state?.test?.currentQuestion);

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
