import { SocialsInterface } from '@/src/pages'
import {
	Section,
	SectionText,
	SectionTitle,
	StyledLink,
} from '@/src/styles/GlobalComponents'
import Button from '@/src/styles/GlobalComponents/Button'
import React from 'react'
import { LeftSection } from './Hero.styled'

interface HeroInterface {
	socials: SocialsInterface[]
}

const Hero = ({ socials }: HeroInterface) => {
	const link = (query: string) =>
		socials.find(({ name }: SocialsInterface) => name === query)?.link

	return (
		<Section row noPadding>
			<LeftSection>
				<SectionTitle main>
					Hello there, <br />
					I'm Mark Rasavong
				</SectionTitle>
				<SectionText>Front End Developer</SectionText>
				<Button>
					<StyledLink
						href={link('cvGoogle')}
						target="_blank"
						rel="noopener noreferrer"
					>
						Curriculum Vitae
					</StyledLink>
				</Button>
				<StyledLink
					href={link('portfolioSauce')}
					target="_blank"
					rel="nonreferrer noopener"
				>
					<p>Check out this portfolio source code!</p>
				</StyledLink>
			</LeftSection>
		</Section>
	)
}

export default Hero
