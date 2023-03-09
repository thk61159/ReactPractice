import React, { useState } from 'react'

const State = () => {
	let age = 10
	const nonechangstate = () => (name = 'Mr.' + name)
	let [name, setName] = useState('Ben')
  const changstate = () => {
		if (!name.includes('Mr.')) {
			name = 'Mr.' + name
		} 
		setName(name)
	}
	return (
		<div>
			<p>friend's name : {name}</p>
			<p>friend's age : {age}</p>
			<button onClick={nonechangstate}>no change state</button>
			<button onClick={changstate}>change state</button>
		</div>
	)
}

export default State
