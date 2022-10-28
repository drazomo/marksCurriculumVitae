import { tableData } from '@/lib/airtable'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Hero from '../components/Hero'
import HeroAnimation from '../components/HeroAnimation'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Timeline from '../components/Timeline'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

export interface SocialsInterface {
	id: string
	link: string
	name: string
}

export interface ProjectInterface {
	id: string
	name: string
	source: string
	visit: string
	description: string
	tags: string
	image: string
}

const Home: NextPage = ({
	socials,
	projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(projects)

	return (
		<Layout socials={socials}>
			<Section grid>
				<Hero
					cv={socials.find(({ name }: SocialsInterface) => name === 'cvGoogle')}
				/>
				<HeroAnimation />
			</Section>
			<Projects projects={projects} />
			<Technologies />
			<Timeline />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const socials = await tableData('socialLinks')
	const projects = await tableData('projects')

	return {
		props: {
			socials,
			projects,
		},
	}
}

export default Home
