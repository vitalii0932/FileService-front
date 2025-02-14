import './Files.css'
import SelectFiles from '../SelectFiles/SelectFiles'
import Table from '../Table/Table'
import Blocks from '../Blocks/Blocks'
import ToggleView from '../ToggleView/ToggleView'
import { useState, useEffect } from 'react'

export default function Files() {
	const [view, setView] = useState(
		() => localStorage.getItem('view') || 'rows'
	)

	useEffect(() => {
		const handleStorageChange = () => {
			setView(localStorage.getItem('view') || 'rows')
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [])

	return (
		<article className='scrollable_content'>
			<ToggleView />
			<SelectFiles />
			{view === 'rows' ? <Table /> : <Blocks />}
		</article>
	)
}
