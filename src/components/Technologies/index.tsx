import React from 'react'
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '@/src/styles/GlobalComponents'
import { DiFirebase, DiReact, DiCode } from 'react-icons/di'
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './Tecnologies.styled'

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>From the front, back, and all ends of tech.</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Client</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js, Nextjs
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Server</ListTitle>
					<ListParagraph>
						Experience with <br />
						Express with Node.js, MongoDB, and Postgres
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiCode size="3rem" />
				<ListContainer>
					<ListTitle>Misc.</ListTitle>
					<ListParagraph>
						Experience with <br />
						Google Analytics SEO Tools
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
)

export default Technologies
