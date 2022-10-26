import {
	Section,
	SectionText,
	SectionTitle,
} from '@/src/styles/GlobalComponents'
import Button from '@/src/styles/GlobalComponents/Button'
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
			<Button
				onClick={() =>
					window
						.open(
							'https://drive.google.com/file/d/1SneqeMWWjDdrNUwWi254NUimUkpVU9gQ/view?usp=sharing' as unknown as URL
						)!
						.focus()
				}
			>
				Curriculum Vitae
			</Button>
		</LeftSection>
	</Section>
)

export default Hero
