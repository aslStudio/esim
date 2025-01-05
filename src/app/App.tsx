import {useEffect} from "react"
import {BrowserRouter} from "react-router-dom"

import {
	LanguageProvider,
	RouteTransitionProvider
} from "@/shared/lib/providers"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import {tokenModel} from "@/shared/model"

import { RouterView } from './router'

function App() {
	const { expand, setHeaderColor, openFullScreen, disableVerticalSwipes } = useTelegram()

	useEffect(() => {
		expand()
		openFullScreen()
		disableVerticalSwipes?.()
		setHeaderColor('bg_color')

		tokenModel.clearToken()
	})

	return (
		<BrowserRouter>
			<LanguageProvider>
				<RouteTransitionProvider>
					<RouterView />
				</RouteTransitionProvider>
			</LanguageProvider>
		</BrowserRouter>
	)
}

export default App
