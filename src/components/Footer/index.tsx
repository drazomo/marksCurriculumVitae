import { SocialsInterface } from '@/src/pages'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/Header.styled'
import {
	FooterWrapper,
	LinkColumn,
	LinkList,
	LinkTitle,
	LinkItem,
	SocialIconsContainer,
	CompanyContainer,
	Slogan,
} from './Footer.styled'

interface FooterProps {
	socials: SocialsInterface[]
}

const Footer = ({ socials }: FooterProps) => {
	const link = (query: string) =>
		socials.find((social) => social.name === query)?.link

	return (
		<FooterWrapper id="contact">
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href={`tel:${link('mobile')}`}>{link('mobile')}</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href={`mailto:${link('email')}`}>{link('email')}</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Mark Rasavong</Slogan>
				</CompanyContainer>
				<SocialIcons
					href={link('gitHub')}
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons
					href={link('linkedIn')}
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
