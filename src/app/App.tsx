import {useEffect} from "react"
import {BrowserRouter} from "react-router-dom"
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import {
	LanguageProvider,
	RouteTransitionProvider
} from "@/shared/lib/providers"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

import { RouterView } from './router'
import {AuthProvider} from "@/shared/layouts";

function App() {
	const { expand, setHeaderColor, openFullScreen, disableVerticalSwipes } = useTelegram()

	useEffect(() => {
		expand()
		openFullScreen()
		disableVerticalSwipes?.()
		setHeaderColor('bg_color')
	})

	return (
		<AuthProvider>
			<TonConnectUIProvider
				manifestUrl={'https://gist.github.com/alexcraviotto/b5d974bc120c3b46a0d047ba79cb4874#file-tonconnect-manifest-json'}
				actionsConfiguration={{
					twaReturnUrl: 'https://t.me/tow_bot'
				}}
			>
				<BrowserRouter>
					<LanguageProvider>
						<RouteTransitionProvider>
							<RouterView />
						</RouteTransitionProvider>
					</LanguageProvider>
				</BrowserRouter>
			</TonConnectUIProvider>
		</AuthProvider>
	)
}

export default App
