import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './modules';
import { Start, Test, Finish } from './pages';
import { RoutesList } from './utils';
import './App.scss';

function App() {

	const [testStarted, setTestStarted] = useState(false)


  return (
    <div className="App">
		<HashRouter>
			<Header/>
			<Routes>
				<Route path={RoutesList.home} element={<Start testStarted={testStarted}/>}/>
				<Route path={RoutesList.test} element={<Test setTestStarted={setTestStarted}/>}/>
				<Route path={RoutesList.results} element={<Finish setTestStarted={setTestStarted}/>}/>
			</Routes>
		</HashRouter>
    </div>
  );
}

export default App;
