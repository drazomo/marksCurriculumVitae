import React from 'react'
import { projects } from '@/src/constants'
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents'
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
} from './Projects.styled'

const Projects = () => (
	<Section noPadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(
				({ id, image, title, tags, source, visit, description }) => (
					<BlogCard key={`BlogCard_${Math.random()}`}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree titleH3>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={`tag_${Math.random()}`}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks
								href={source}
								target="_blank"
								rel="noopener noreferrer"
							>
								Source Code
							</ExternalLinks>
							<ExternalLinks
								href={visit}
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit
							</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
)

export default Projects
