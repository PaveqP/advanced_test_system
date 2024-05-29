import React, { FC, useEffect, useState } from 'react'
import './MultiAnswer.scss'
import { useActions } from '../../hooks'

interface IAnswers {
	answers: [],
	points: number
}
const MultiAnswer: FC<IAnswers> = ({ answers }) => {

    const dispatch = useActions()

    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    console.log(localStorage.getItem('currentAnswer'))

    const handleCheckboxChange = (answer: string, checked: boolean) => {
		setSelectedAnswers(prevSelectedAnswers => {
			if (checked) {
				return [...prevSelectedAnswers, answer];
			} else {
				return prevSelectedAnswers.filter(selectedAnswer => selectedAnswer !== answer);
			}
		});
	};

	useEffect(() => {
        dispatch.setCurrentAnswer(selectedAnswers);
    }, [selectedAnswers]);

    return (
        <div className="multiAnswer">
            <ul className="multiAnswer__variants">
                {answers.map((answer) => (
                    <li className="variants-variant" key={answer}>
                        <input
                            type="checkbox"
                            id={answer}
                            checked={selectedAnswers.includes(answer)}
                            onChange={(e) => handleCheckboxChange(answer, e.target.checked)}
                        />
                        <label htmlFor={answer} className="variant-text">{answer}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { MultiAnswer };