import axiosClient from "@/api-client/axios-client"
import { EmptyLayout } from "@/components/layout/empty"
import { AppPropsWithLayout } from "@/models"
import { createEmotionCache, theme } from "@/utils"
import { CacheProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { SWRConfig } from "swr"
import "../styles/globals.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SWRConfig
					value={{
						fetcher: (url) => axiosClient.get(url),
						shouldRetryOnError: false,
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	)
}
