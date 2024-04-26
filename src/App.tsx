import React, { useState } from 'react';
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './modules';
import { Start, Test, Finish } from './pages';
import './App.scss';

function App() {

	const [testStarted, setTestStarted] = useState(false)

  return (
    <div className="App">
		<HashRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<Start testStarted={testStarted}/>}/>
				<Route path='/test' element={<Test setTestStarted={setTestStarted}/>}/>
				<Route path='/results' element={<Finish setTestStarted={setTestStarted}/>}/>
			</Routes>
		</HashRouter>
    </div>
  );
}

export default App;
