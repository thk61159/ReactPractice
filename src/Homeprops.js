import React from 'react'
import Props from './Props'
const arrforprops = ['1', '2', '3']
const people = [
	{ name: 'Ben', age: 12 },
	{ name: 'Kevin', age: 13 },
	{ name: 'Mary', age: 14 },
	{ name: 'Gee', age: 15 },
]
const Homeprops = () => {
	return (
		<div style={{ display: 'flex' }}>
			<Props prop={arrforprops[0]} />
			<Props prop={arrforprops[1]} />
			<Props prop={arrforprops[2]} />
			{people.map((e, index) => (
				<Props name={e.name} age={e.age} key={index} />
			))}
		</div>
	)
}

export default Homeprops
