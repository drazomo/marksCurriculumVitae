import Link from 'next/link'
import React from 'react'
import { DiCssdeck } from 'react-icons/di'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import {
	BrandSpan,
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from './Header.styled'

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '2.1vh',
					}}
				>
					<DiCssdeck size="3rem" /> <BrandSpan>Mark Rasavong</BrandSpan>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Tech</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#contact">
					<NavLink>Contact</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons
				href="https://github.com/MarkRasavong"
				target="_blank"
				rel="nonreferrer noopener"
			>
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons
				href="https://linkedin.com/in/markrasavong"
				target="_blank"
				rel="nonreferrer noopener"
			>
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
)

export default Header
