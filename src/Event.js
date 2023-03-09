import React from 'react'
let count = 0

const clickHandler = () => {
  count++
  alert(`你按了button${count}`)
}
const clickHandler1 = (msg) => {
	alert(`你按了button${msg}`)
}
const Event = () => {
  return (
		<div className='event'>
			Event練習
			<button onClick={clickHandler}>按我一下</button>
			<button onClick={clickHandler1('會產生問題的寫法')}>
				會產生問題的按鈕
			</button>
			<button onClick={() => clickHandler1('不會產生問題的寫法')}>
				不會產生問題的按鈕
			</button>
		</div>
	)
}

export default Event