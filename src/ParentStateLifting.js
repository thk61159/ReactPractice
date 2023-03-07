import React, { useState } from 'react'
import ChildStateLifting1 from './ChildStateLifting1'
import ChildStateLifting2 from './ChildStateLifting2'

const ParentStateLifting = () => {
  let [Message, setMessage] = useState([])
  return (
		<div className="stateLifting">
			State Lifting practice
			<ChildStateLifting1 Message={Message} setMessage={setMessage} />
			<ChildStateLifting2 Message={Message} setMessage={setMessage} />
		</div>
	)
}

export default ParentStateLifting
