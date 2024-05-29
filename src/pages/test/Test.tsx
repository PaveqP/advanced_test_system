import React, { useEffect, FC } from 'react'
import './Test.scss'
import { useTypedSelector, useActions } from '../../hooks';
import { Question, Structure, TestInfo } from '../../modules';

interface ITest{
	setTestStarted: (testStarted: boolean) => void
}
const Test:FC<ITest> = ({setTestStarted}) => {

	const testData = useTypedSelector((state) => state.tests.testData);

	const dispatch = useActions()

	const requestData = async () => {
		try {
			const response = await require('../../data/mockTestData.json')
			dispatch.setData(response)
		} catch (error) {
			throw new Error(`Error: ${error}`)
		}
	}

	useEffect(() => {
		requestData()
		setTestStarted(true)
	}, [])

  return (
    <div className='test'>
        {testData.questions.length > 0 &&
			<div className="test__container">
				<div className="test-content">
					<TestInfo/>
					<Question/>
				</div>
				<Structure setTestStarted={setTestStarted}/>
			</div>
		}
    </div>
  )
}

export {Test}