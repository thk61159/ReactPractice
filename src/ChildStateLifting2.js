import React from 'react'

const ChildStateLifting2 = ({ Message, setMessage }) => {
	return (
		<div>
			{Message.map((e, i) => (
				<p>
					輸入的第{i+1}個訊息為{e}
				</p>
			))}
		</div>
	)
}

export default ChildStateLifting2
