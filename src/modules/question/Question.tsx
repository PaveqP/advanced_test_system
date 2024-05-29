import React, { useEffect, useState } from 'react'
import { OneAnswer, MultiAnswer, ShortAnswer, FullAnswer } from '../../components';
import { useActions, useTypedSelector } from '../../hooks'
import { useNavigate } from "react-router-dom";
import { RoutesList } from '../../utils';
import './Question.scss'

interface IQuestion{
    number: number
    type: string
    points: number
    condition: string
    answers: []
    trueAnswer: []
}

function Question() {

    const testData = useTypedSelector((state) => state.tests.testData);
    const currentAnswer = useTypedSelector((state) => state.tests.currentAnswer);
    const totalPoints = useTypedSelector((state) => state.tests.totalPoints);
    const navigate: any = useNavigate();

    const dispatch = useActions()

    const initialCurrentQuestion = Number(localStorage.getItem('currentQuestion')) || 1;
    const [currentQuestion, setCurrentQuestion] = useState<number>(initialCurrentQuestion);

    const setQuestionEvent = () => {
        let currentQuestionData: any = testData.questions.find((question: any) => question.number === currentQuestion)
        if ((JSON.stringify(currentQuestionData.trueAnswer) === JSON.stringify(currentAnswer)) && currentQuestionData.type !== "full_answer"){
            dispatch.setTotalPoints(totalPoints + currentQuestionData.points)
        }
        if (currentQuestion + 1 <= testData.questions.length){
                if (!currentAnswer[0]){
                    // eslint-disable-next-line no-restricted-globals
                    let isNext = confirm("Вы не ответили на вопрос. В случае продолжения, вы не сможете вернуться к этому вопросу. Продолжить?")
                    isNext && setCurrentQuestion(currentQuestion => currentQuestion + 1);
                } else{
                    setCurrentQuestion(currentQuestion => currentQuestion + 1);
                }
                dispatch.setCurrentAnswer([])
        } else {
          navigate(RoutesList.results)
        }
    }

    const renderQuestionType = (question: IQuestion) => {
        switch (question.type) {
          case 'one_answer':
            return <OneAnswer answers={question.answers} points={question.points} />;
          case 'multi_answer':
            return <MultiAnswer answers={question.answers} points={question.points} />;
          case 'short_answer':
            return <ShortAnswer />;
          case 'full_answer':
            return <FullAnswer />;
          default:
            return null;
        }
      };

    useEffect(() => {
        localStorage.setItem('currentQuestion', String(currentQuestion));
        dispatch.setCurrentQuestion(currentQuestion)
    }, [currentQuestion]);

  return (
    <div className='question'>
        {testData && testData?.questions.map((question: IQuestion) => (
            (question.number === currentQuestion) &&
            <form action="" key={question.number}>
                <p className='question__condition'>
                    {question.condition}
                </p>
                {
                    renderQuestionType(question)
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
