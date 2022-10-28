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

const Home: NextPage = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const { socials } = props

	console.log(socials)
	return (
		<Layout>
			<Section grid>
				<Hero
					cv={socials.find(({ name }: SocialsInterface) => name === 'cvGoogle')}
				/>
				<HeroAnimation />
			</Section>
			<Projects />
			<Technologies />
			<Timeline />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const socials = await tableData('socialLinks')

	return {
		props: {
			socials,
		},
	}
}

export default Home
