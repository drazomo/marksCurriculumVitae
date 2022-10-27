import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HeroAnimation from '../components/HeroAnimation'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home: NextPage = () => (
	<Layout>
		<Section grid>
			<Hero />
			<HeroAnimation />
		</Section>
	</Layout>
)

export default Home
