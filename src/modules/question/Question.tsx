import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { OneAnswer, MultiAnswer, ShortAnswer, FullAnswer } from '../../components';
import { SetCurrentAnswer, SetCurrentQuestion, SetTotalPoints } from '../../store/testReducer';
import { store } from '../../store';
import { useNavigate } from "react-router-dom";
import './Question.scss'

function Question() {

    const testData = useSelector((state: RootState) => state?.test?.testData);
    const currentAnswer = useSelector((state: RootState) => state?.test?.currentAnswer);
    const totalPoints = useSelector((state: RootState) => state?.test?.totalPoints);
    const navigate: any = useNavigate();

    const initialCurrentQuestion = Number(localStorage.getItem('currentQuestion')) || 1;
    const [currentQuestion, setCurrentQuestion] = useState<number>(initialCurrentQuestion);

    const setQuestionEvent = () => {
        let currentQuestionData: any = testData.questions.find((question: any) => question.number === currentQuestion)
        if ((JSON.stringify(currentQuestionData.trueAnswer) === JSON.stringify(currentAnswer)) && currentQuestionData.type !== "full_answer"){
            store.dispatch(SetTotalPoints(totalPoints + currentQuestionData.points))
        }
		if (currentQuestion + 1 <= testData.questions.length){
            if (!currentAnswer[0]){
                // eslint-disable-next-line no-restricted-globals
                let isNext = confirm("Вы не ответили на вопрос. В случае продолжения, вы не сможете вернуться к этому вопросу. Продолжить?")
                isNext && setCurrentQuestion(currentQuestion => currentQuestion + 1);
            } else{
                setCurrentQuestion(currentQuestion => currentQuestion + 1);
            }
            store.dispatch(SetCurrentAnswer([]))
		} else {
            navigate('/results')
        }
    }

    useEffect(() => {
        localStorage.setItem('currentQuestion', String(currentQuestion));
        store.dispatch(SetCurrentQuestion(currentQuestion));
    }, [currentQuestion]);

  return (
    <div className='question'>
        {testData && testData?.questions.map((question: any) => (
            (question.number === currentQuestion) &&
            <form action="" key={question.number}>
                <p className='question__condition'>
                    {question.condition}
                </p>
                {
                    question.type === 'one_answer'?
						<OneAnswer answers={question.answers} points={question.points}/> :
					question.type === 'multi_answer'?
						<MultiAnswer answers={question.answers} points={question.points}/> :
					question.type === 'short_answer'?
						<ShortAnswer trueCase={question.trueAnswer} points={question.points}/> : 
					<FullAnswer trueCase={question.trueAnswer} points={question.points}/>
                }
                <button className="question__nextQuestion" type='button' onClick={setQuestionEvent}>
                    Ответить
                </button>
            </form>
        ))
        }
    </div>
  )
}

export {Question}
