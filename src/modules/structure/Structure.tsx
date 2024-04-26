import React, {FC} from 'react'
import './Structure.scss'
import { useSelector } from 'react-redux';
import { Timer } from '../../components';
import { RootState, store } from '../../store';
import { SetDefaultState } from '../../store/testReducer';
import { useNavigate } from 'react-router-dom';


interface IStructure{
	setTestStarted: (testStarted: boolean) => void
}
const Structure:FC<IStructure> = ({setTestStarted}) => {

	const testData = useSelector((state: RootState) => state?.test?.testData);
	const currentQuestion = useSelector((state: RootState) => state?.test?.currentQuestion);
	const navigate: any = useNavigate();

	const completeTest = () => {
		// eslint-disable-next-line no-restricted-globals
		let isComplete = confirm("Вы не ответили на все вопросы. В случае завершения теста, возможность выбирать ответы закроется. Желаете досрочно завершить тест?")
		if(isComplete){
			store.dispatch(SetDefaultState())
			localStorage.clear()
			setTestStarted(false)
			navigate('/results')
		}
	}

  return (
    <div className='structure'>
    	<Timer/>
		<div className="structure__questionsList">
			{testData &&
				testData.questions.map((question: any) => (
					<button 
					className={
						question.number < currentQuestion ? 'questionsList-question_ready' :
						question.number === currentQuestion ? 'questionsList-question_active' : 'questionsList-question'
					} 
					key={question.number}
					>
						{question.number}
					</button>
				))
			}
		</div>
		<div className="structure__actionButtons">
			<button className="structure__sendTest structureButton" onClick={completeTest}>
				Завершить тест
			</button>
		</div>
    </div>
  )
}

export {Structure}