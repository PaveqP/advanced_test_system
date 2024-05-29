import React, { FC, useEffect, useState } from 'react'
import { useActions } from '../../hooks'
import { GetAnswers } from '../../utils'
import './OneAnswer.scss'

interface IAnswers {
	answers: [],
	points: number
}
const OneAnswer: FC<IAnswers> = ({answers}) => {

	const dispatch = useActions()

	const [selectedAnswer, setSelectedAnswer] = useState<string[]>(GetAnswers());

	const handleSetCurrentAnswer = (answer: string) => {
		setSelectedAnswer([answer]);
	};

	useEffect(() => {
        dispatch.setCurrentAnswer(selectedAnswer);
    }, [selectedAnswer]);

  return (
    <div className='oneAnswer'>
		<ul className="oneAnswer__variants">
			{
				answers.map((answer) => (
					<li className="variants-variant" key={answers.indexOf(answer)}>
						<input 
							type="radio" 
							name="answer" 
							checked={selectedAnswer.includes(answer)}
							id={String(answers.indexOf(answer))} 
							onChange={() => handleSetCurrentAnswer(answer)}
						/>
						<p className="variant-text">{answer}</p>
					</li>
				))
			}
        </ul>
    </div>
  )
}

export {OneAnswer}
