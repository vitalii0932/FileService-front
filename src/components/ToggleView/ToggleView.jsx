import { useEffect, useState } from 'react'
import './ToggleView.css'

export default function ToggleView() {
	const [activeView, setActiveView] = useState('rows')
	const [isDarkMode, setIsDarkMode] = useState(
		() => localStorage.getItem('theme') === 'dark'
	)

	useEffect(() => {
		const handleStorageChange = () => {
			setIsDarkMode(localStorage.getItem('theme') === 'dark')
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [])

	useEffect(() => {
		document.documentElement.classList.toggle('dark-theme', isDarkMode)
	}, [isDarkMode])

	const handleToggle = view => {
		setActiveView(view)
	}

	return (
		<div className='toggle_user_buttons'>
			<button
				className={`toggle_btn ${activeView === 'rows' ? 'active' : ''}`}
				onClick={() => handleToggle('rows')}
			>
				<i className='fa-solid fa-table-list'></i>
			</button>
			<button
				className={`toggle_btn ${activeView === 'blocks' ? 'active' : ''}`}
				onClick={() => handleToggle('blocks')}
			>
				<i className='fa-solid fa-border-all'></i>
			</button>
		</div>
	)
}
