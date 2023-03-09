import React from 'react'

class ClassComponent extends React.Component {
	constructor(props) { //從React.Component constructor 在延伸一個constructor
		super(props) //繼承React.Component constructor屬性
		this.state = { color: 'lightgreen', name: 'Ben' }
		this.bgColorHandler = this.bgColorHandler.bind(this) //綁定portotype this
	}
	async bgColorHandler() {
		if (this.state.color === 'lightblue') {
			await this.setState({ color: 'lightgreen', name: 'Ben' })
			return
		}
		//setState是非同步！
		await this.setState({ color: 'lightblue', name: 'Den' })
		console.log(this.state.name)
	}
	render() {
		return (
			<div style={{ backgroundColor: this.state.color }}>
				舊版ClassComponent製作
				<p>{this.props.anyprop}</p>
				<p>現在的背景顏色狀態是{this.state.color}</p>
				<button onClick={this.bgColorHandler}>更改背景顏色</button>
			</div>
		)
	}
}

export default ClassComponent
