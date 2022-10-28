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
import { TechInterface } from '@/src/pages'

interface TecnologiesProps {
	tech: TechInterface[]
}

const Technologies = ({ tech }: TecnologiesProps) => {
	const tecchnology = (query: string) => {
		const techType = tech.find((tex) => tex.name === query)?.tags.split(',')
		return techType?.length === 1
			? techType.join('')
			: techType?.length === 1
			? techType.join(' and ')
			: `${techType?.slice(0, -1).join(', ')} and ${techType?.slice(-1)}`
	}

	return (
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
							<>
								Experience with <br />
								{tecchnology('client')}
							</>
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<DiFirebase size="3rem" />
					<ListContainer>
						<ListTitle>Server</ListTitle>
						<ListParagraph>
							<>
								Experience with <br />
								{tecchnology('server')}
							</>
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<DiCode size="3rem" />
					<ListContainer>
						<ListTitle>Misc.</ListTitle>
						<ListParagraph>
							<>
								Experience with <br />
								{tecchnology('misc')}
							</>
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
		</Section>
	)
}

export default Technologies
