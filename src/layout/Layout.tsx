import React from 'react'
import Meta from './Meta'
import { Container } from './LayoutStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
	<Container>
		<Header />
		<Meta />
		<main>{children}</main>
		<Footer />
	</Container>
)
