import React, {FC} from 'react'
import './Structure.scss'
import { Timer } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { RoutesList } from '../../utils';
import { useNavigate } from 'react-router-dom';


interface IStructure{
	setTestStarted: (testStarted: boolean) => void
}
const Structure:FC<IStructure> = ({setTestStarted}) => {

	const dispatch = useActions()

	const testData = useTypedSelector((state) => state.tests.testData);
	const currentQuestion = useTypedSelector((state) => state.tests.currentQuestion);
	const navigate: any = useNavigate();

	const completeTest = () => {
		// eslint-disable-next-line no-restricted-globals
		let isComplete = confirm("Вы не ответили на все вопросы. В случае завершения теста, возможность выбирать ответы закроется. Желаете досрочно завершить тест?")
		if(isComplete){
			setTestStarted(false)
			navigate(RoutesList.results)
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