import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
	const router = useRouter()
	return (
		<>
			<nav className="navbar">
				<div className="navbar-logo">
					<Link href="/">
						<img className="logo" src="/KilnLogo.svg" alt="The Design Kiln" width="210" height="85"/>
					</Link>
				</div>
				<ul className="navLinks">
					<li
						className={
							router.pathname == '/'
								? 'active'
								: router.pathname == '/post/[slug]'
								? 'active2'
								: ''
						}
					>
						<Link href="/">projects</Link>
					</li>
					<li className={router.pathname == '/contact' ? 'active' : ''}>
						<Link href="/contact">contact</Link>
					</li>
					<li className={router.pathname == '/about' ? 'active' : ''}>
						<Link href="/about">about</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
