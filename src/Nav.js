import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Nav = () => {
	return (
		<div className="nav">
			<nav>
				css套用練習
				<ul style={{ display: 'flex', listStyleType: 'none' }}>
					<li>
						<Link to="/" style={{ color: 'yellow' }}>
							首頁
						</Link>
					</li>
					<li>
						<Link to="/Expression">Expression</Link>
					</li>
					<li>
						<Link
							to="/Event"
							style={{ color: 'orange', backgroundColor: 'gray' }}
						>
							Event(有錯誤示範)
						</Link>
					</li>
					<li>
						<Link to="/State">State</Link>
					</li>
					<li>
						<Link to="/ParentStateLifting">ParentStateLifting</Link>
					</li>
					<li>
						<Link to="/UseEffect">UseEffect</Link>
					</li>
					<li>
						<Link to="/ClassComponent">ClassComponent</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}

export default Nav
