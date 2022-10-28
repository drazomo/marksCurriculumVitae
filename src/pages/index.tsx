import type { NextPage } from 'next'
import Hero from '../components/Hero'
import HeroAnimation from '../components/HeroAnimation'
import Projects from '../components/Projects'
<<<<<<< HEAD
import Technologies from '../components/Technologies'
=======
>>>>>>> ffcb6cb5b487bbe7332ae227142a01b13daf6d2a
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home: NextPage = () => (
	<Layout>
		<Section grid>
			<Hero />
			<HeroAnimation />
		</Section>
		<Projects />
<<<<<<< HEAD
		<Technologies />
=======
>>>>>>> ffcb6cb5b487bbe7332ae227142a01b13daf6d2a
	</Layout>
)

export default Home
