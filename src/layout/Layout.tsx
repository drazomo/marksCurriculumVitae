import React from 'react'
import Meta from './Meta'
import { Container } from './LayoutStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SocialsInterface } from '../pages'

interface LayoutProps {
	children: React.ReactNode
	socials: SocialsInterface[]
}

export const Layout = (props: LayoutProps) => (
	<Container>
		<Header socials={props.socials} />
		<Meta />
		<main>{props.children}</main>
		<Footer socials={props.socials} />
	</Container>
)
