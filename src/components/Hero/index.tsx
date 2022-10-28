import {
	Section,
	SectionText,
	SectionTitle,
} from '@/src/styles/GlobalComponents'
import Button from '@/src/styles/GlobalComponents/Button'
import Link from 'next/link'
import React from 'react'
import { LeftSection } from './Hero.styled'

const Hero = () => (
	<Section row noPadding>
		<LeftSection>
			<SectionTitle main>
				Hello there, <br />
				I'm Mark Rasavong
			</SectionTitle>
			<SectionText>Front End Developer</SectionText>
			<a
				href="https://drive.google.com/file/d/1SneqeMWWjDdrNUwWi254NUimUkpVU9gQ/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button>Curriculum Vitae</Button>
			</a>
		</LeftSection>
	</Section>
)

export default Hero
