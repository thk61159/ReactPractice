import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Expression from './Expression'
import Nav from './Nav'
import Homeprops from './Homeprops'
import Event from './Event'
import State from './State'
import ParentStateLifting from './ParentStateLifting'
import UseEffect from './UseEffect'
import ClassComponent from './ClassComponent'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="ReactPractice/" element={<Nav />}>
					<Route index element={<Homeprops />}></Route>
					<Route
						path="Expression"
						element={<Expression />}
					></Route>
					<Route path="Event" element={<Event />}></Route>
					<Route path="State" element={<State />}></Route>
					<Route
						path="ParentStateLifting"
						element={<ParentStateLifting />}
					></Route>
					<Route path="UseEffect" element={<UseEffect />}></Route>
					<Route
						path="ClassComponent"
						element={<ClassComponent anyprop="要傳遞的props" />}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
