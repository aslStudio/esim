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
				manifestUrl={'https://gist.githubusercontent.com/alexcraviotto/b5d974bc120c3b46a0d047ba79cb4874/raw/2b04202d388d9547173b56c6ef27734edba18b29/tonconnect-manifest.json'}
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
