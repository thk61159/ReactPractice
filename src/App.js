import Expression from './Expression'
import Nav from './Nav'
import Props from './Props'
import Event from './Event'
import State from './State'
import ParentStateLifting from './ParentStateLifting'
const arrforprops = ['1', '2', '3']
const people = [
	{ name: 'Ben', age: 12 },
	{ name: 'Kevin', age: 13 },
	{ name: 'Mary', age: 14 },
	{ name: 'Gee', age: 15 }
]
function App() {
	return (
		<div>
			<Nav />
			<div style={{ display: 'flex' }}>
				<Expression />
				<Props prop={arrforprops[0]} />
				<Props prop={arrforprops[1]} />
				<Props prop={arrforprops[2]} />
				{people.map((e, index) => (
					<Props name={e.name} age={e.age} key={index} />
				))}
			</div>
			<Event />
			<State />
			<ParentStateLifting />
		</div>
	)
  
}

export default App
