import Link from 'next/link'
import React from 'react'
import avatar from '@/public/images/avatar.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import {
	BrandSpan,
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	ImageContainer,
} from './Header.styled'
import Image from 'next/image'
import { SocialsInterface } from '@/src/pages'

interface HeaderProps {
	socials: SocialsInterface[]
}

const Header = ({ socials }: HeaderProps) => {
	const linkedIn = socials.find((social) => social.name === 'linkedIn')?.link
	const gitHub = socials.find((social) => social.name === 'gitHub')?.link

	return (
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
						<ImageContainer>
							<Image
								src={avatar}
								alt="Mark Rasavong's web logo"
								width={'100%'}
								height={'100%'}
							/>
						</ImageContainer>
						<BrandSpan>Mark Rasavong</BrandSpan>
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
				<SocialIcons href={gitHub} target="_blank" rel="nonreferrer noopener">
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons href={linkedIn} target="_blank" rel="nonreferrer noopener">
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
			</Div3>
		</Container>
	)
}

export default Header
