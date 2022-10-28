import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HeroAnimation from '../components/HeroAnimation'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home: NextPage = () => (
	<Layout>
		<Section grid>
			<Hero />
			<HeroAnimation />
		</Section>
		<Projects />
		<Technologies />
	</Layout>
)

export default Home
