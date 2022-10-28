import { ProjectInterface } from '@/src/pages'
import React from 'react'
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

interface ProjectsProps {
	projects: ProjectInterface[]
}

const Projects = ({ projects }: ProjectsProps) => (
	<Section noPadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({ id, image, name, tags, source, visit, description }) => (
				<BlogCard key={`BlogCard_${id}_${Math.random()}`}>
					<Img src={image} />
					<TitleContent>
						<HeaderThree titleH3>{name}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<div>
						<TitleContent>Tags</TitleContent>
						<TagList>
							{tags?.split(', ').map((tag, i) => (
								<Tag key={`tag_${i}_${Math.random()}`}>{tag}</Tag>
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
			))}
		</GridContainer>
	</Section>
)

export default Projects
