import React,{useState, useEffect} from 'react'

const UseEffect = () => {
  let [Name, setName] = useState('Ben')
  const buttonHandler = () => {
    setName('Lee')
  }
  useEffect(() => {
    console.log('useEffect被執行')
  },[Name])
  return (
		<div>
      <p>{Name}</p>
      <button onClick={buttonHandler}>點擊改變Name狀態</button>
		</div>
	)
}

export default UseEffect