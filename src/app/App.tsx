import {useEffect} from "react"
import {BrowserRouter} from "react-router-dom"

import {
	LanguageProvider,
	RouteTransitionProvider
} from "@/shared/lib/providers"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

import { RouterView } from './router'

function App() {
	const { setHeaderColor, openFullScreen } = useTelegram()

	useEffect(() => {
		openFullScreen()
		setHeaderColor('bg_color')
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
