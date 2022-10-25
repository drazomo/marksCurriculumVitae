import React from 'react'
import Meta from './Meta'
import { Container } from './LayoutStyles'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
		<Container>
			<Meta />
			<main>{children}</main>
		</Container>
	)