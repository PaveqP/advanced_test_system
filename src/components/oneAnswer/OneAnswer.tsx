import React, { FC, useState } from 'react'
import { useActions } from '../../hooks'
import './OneAnswer.scss'

interface IAnswers {
	answers: [],
	points: number
}
const OneAnswer: FC<IAnswers> = ({answers}) => {

	const dispatch = useActions()

	const [currentAnswer, setCurrentAnswer] = useState<string[]>([])

	const handleSetCurrentAnswer = (answer: string) => {
		dispatch.setCurrentAnswer([answer])
		setCurrentAnswer([answer]);
	};

  return (
    <div className='oneAnswer'>
		<ul className="oneAnswer__variants">
			{
				answers.map((answer) => (
					<li className="variants-variant" key={answers.indexOf(answer)}>
						<input type="radio" name="answer" id={String(answers.indexOf(answer))} onChange={() => handleSetCurrentAnswer(answer)}/>
						<p className="variant-text">{answer}</p>
					</li>
				))
			}
        </ul>
    </div>
  )
}

export {OneAnswer}
