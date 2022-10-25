import '../styles/globals.tsx'
import type { AppProps } from 'next/app'
import Theme from '../styles/theme'
import Meta from '../layout/Meta'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Theme>
				<Meta />
				<Component {...pageProps} />
			</Theme>
		</>
	)
}

export default MyApp
