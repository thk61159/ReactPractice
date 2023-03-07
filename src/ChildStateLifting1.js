import React, { useState } from 'react'

const ChildStateLifting1 = ({ Message, setMessage }) => {
	let [Input, setInput] = useState('')
	// 共用資訊移到父層
	// let [Message,setMessage]=useState([])
	const inputHandler = e => {
		console.log(e.target.value)
		setInput(e.target.value)
	}
	const formHandler = e => {
		console.log(e)
		e.preventDefault()
		setMessage([...Message, Input])
		setInput('')
	}
	return (
		<div>
			<form>
				<input type="text" onChange={inputHandler} value={Input} />
				<button onClick={formHandler}>submit</button>
			</form>
		</div>
	)
}

export default ChildStateLifting1
