import React from 'react'

const Props = ({name,age,prop}) => {
 
  return (
		<div className="prop">
      props練習
      prop是{prop}
			名字：{name}, 年齡：{age}
		</div>
	)
}

export default Props