import type { NextPage } from 'next'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home: NextPage = () => (
	<Layout>
		<Section>Hello World!</Section>
	</Layout>
)

export default Home
