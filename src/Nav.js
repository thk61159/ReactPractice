import React from 'react'

const Nav = () => {
	return (
    <div className="nav">
      css套用練習
			<ul>
				<li>
					<a href="/#" style={{ color: 'yellow' }}>
						首頁
					</a>
				</li>
				<li>
					<a href="/#" style={{ color: 'orange' , backgroundColor: "gray"}}>
						另一頁
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Nav
