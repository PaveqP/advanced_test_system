import React, {FC, useEffect} from 'react'
import './Finish.scss'
import { useActions, useTypedSelector } from '../../hooks';
import { RoutesList } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';

interface IFinish{
	setTestStarted: (testStarted: boolean) => void
}

const Finish:FC<IFinish> = ({setTestStarted}) => {

	const dispatch = useActions()

	const testData = useTypedSelector((state) => state.tests.totalPoints);
	const navigate: any = useNavigate();

	const clear = () => {
		dispatch.setDefaultState()
		localStorage.clear()
		setTestStarted(false)
	}

	useEffect(() => {
		window.addEventListener('popstate', () => {
			clear()
			navigate(RoutesList.home)
		})
	}, [navigate])

  return (
    <div className='finish'>
      <p className="finish__title">Вы закончили тестирование!</p>
	  <div className="finish__results">
		<div className="results__separator"></div>
		<p className='results__result'>Ваш результат: {String(testData)}</p>
		<div className="results__separator"></div>
		<Link to={RoutesList.home}>
      		<button className="results__restart" onClick={clear}>Начать заново</button>
	    </Link>
	  </div>
    </div>
  )
}

export {Finish}
