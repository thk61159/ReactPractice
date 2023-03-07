import React from 'react'

const showHowToUsedExpression1 = '使用expression'
const showHowToUsedExpression2 = 5 + 100
let showHowToUsedExpression3 = () => {
	return String(new Date())
}
const friends = ['小明', '小華', '小玉']
const Expression = () => {
	return (
		<div className="expression">
			expression 練習
			<p>{showHowToUsedExpression1}</p>
			<p>{showHowToUsedExpression2}</p>
			<p>{showHowToUsedExpression3()}</p>
			<p>{1 + 1}</p>
			<p>{Math.random()}</p>
			<p>{friends} - expression中放置array會直接變成字串</p>
			<p>
				我的三個朋友
				{friends.map(friend => `${friend},`)}
			</p>
			<p>我的三個朋友</p>
			{friends.map((friend, index) => (
				<p key={index}>{friend}</p>
			))}
		</div>
	)
}

export default Expression