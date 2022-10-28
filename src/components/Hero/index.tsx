import { SocialsInterface } from '@/src/pages'
import {
	Section,
	SectionText,
	SectionTitle,
} from '@/src/styles/GlobalComponents'
import Button from '@/src/styles/GlobalComponents/Button'
import React from 'react'
import { LeftSection } from './Hero.styled'

interface HeroInterface {
	cv: SocialsInterface
}

const Hero = ({ cv }: HeroInterface) => (
	<Section row noPadding>
		<LeftSection>
			<SectionTitle main>
				Hello there, <br />
				I'm Mark Rasavong
			</SectionTitle>
			<SectionText>Front End Developer</SectionText>
			<a href={cv.link} target="_blank" rel="noopener noreferrer">
				<Button>Curriculum Vitae</Button>
			</a>
		</LeftSection>
	</Section>
)

export default Hero
