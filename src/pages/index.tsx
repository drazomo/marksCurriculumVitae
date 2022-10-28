import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HeroAnimation from '../components/HeroAnimation'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Timeline from '../components/Timeline'
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
		<Timeline />
	</Layout>
)

export default Home
