import React, {FC, useEffect} from 'react'
import './Finish.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { store } from '../../store';
import { SetDefaultState } from '../../store/testReducer';
import { Link, useNavigate } from 'react-router-dom';

interface IFinish{
	setTestStarted: (testStarted: boolean) => void
}

const Finish:FC<IFinish> = ({setTestStarted}) => {

  const testData = useSelector((state: RootState) => state?.test?.totalPoints);
  const navigate: any = useNavigate();

  const clear = () => {
	store.dispatch(SetDefaultState())
	localStorage.clear()
	setTestStarted(false)
  }

  useEffect(() => {
	window.addEventListener('popstate', () => {
		clear()
		navigate('/')
	})
  }, [navigate])

  return (
    <div className='finish'>
      <p className="finish__title">Вы закончили тестирование!</p>
	  <div className="finish__results">
		<div className="results__separator"></div>
		<p className='results__result'>Ваш результат: {String(testData)}</p>
		<div className="results__separator"></div>
		<Link to='/'>
      		<button className="results__restart" onClick={clear}>Начать заново</button>
	    </Link>
	  </div>
    </div>
  )
}

export {Finish}
