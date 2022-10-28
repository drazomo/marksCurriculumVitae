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

const Footer = () => (
	<FooterWrapper id="contact">
		<LinkList>
			<LinkColumn>
				<LinkTitle>Call</LinkTitle>
				<LinkItem href="tel:0034666996519">+34 66 69 96 519</LinkItem>
			</LinkColumn>
			<LinkColumn>
				<LinkTitle>Email</LinkTitle>
				<LinkItem href="mailto:rasavong.mark@gmail.com">
					rasavong.mark@gmail.com
				</LinkItem>
			</LinkColumn>
		</LinkList>
		<SocialIconsContainer>
			<CompanyContainer>
				<Slogan>Mark Rasavong</Slogan>
			</CompanyContainer>
			<SocialIcons
				href="https://github.com/MarkRasavong"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.linkedin.com/in/markrasavong/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
		</SocialIconsContainer>
	</FooterWrapper>
)

export default Footer
