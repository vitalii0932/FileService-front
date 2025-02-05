import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import './Header.css'

Modal.setAppElement('#root')

export default function Header() {
	const [isUserPanelActive, setUserPanelActive] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem('theme') === 'dark'
	})

	useEffect(() => {
		document.documentElement.classList.toggle('dark-theme', isDarkMode);

		const handleStorageChange = (event) => {
			if (event.key === 'theme') {
				setIsDarkMode(event.newValue === 'dark');
			}
		};

		window.addEventListener('storage', handleStorageChange);

		return () => window.removeEventListener('storage', handleStorageChange);
	}, [isDarkMode]);

	const openUserPanel = () => setUserPanelActive(true)
	const closeUserPanel = () => setUserPanelActive(false)

	const handleUserPanelClick = () => {
		if (isUserPanelActive) {
			closeUserPanel()
		} else {
			openUserPanel()
		}
	}

	const toggleTheme = () => {
		const newTheme = !isDarkMode
		setIsDarkMode(newTheme)
		document.documentElement.classList.toggle('dark-theme', newTheme)
		localStorage.setItem('theme', newTheme ? 'dark' : 'light')
	}

	return (
		<header className='header'>
			<a href='/' className='favicon'>
				<i className='fa-solid fa-box-archive'></i> FileStorage
			</a>

			<div className='user_func'>
				<div className='theme_toggle'>
					<button onClick={toggleTheme}>
						<img src={isDarkMode ? '/images/theme/day.svg' : '/images/theme/night.svg'} alt='Theme Toggle' />
					</button>
				</div>

				<div className='header_user' onClick={handleUserPanelClick}>
					<i className='fa-regular fa-user'></i>
				</div>
			</div>

			<Modal
				isOpen={isUserPanelActive}
				onRequestClose={closeUserPanel}
				contentLabel='User Panel'
				className='user_modal'
				overlayClassName='user_modal_overlay'
			>
				<motion.div
					className='user_panel'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
				>
					<span className='email'>some_email@gmail.com</span>
					<span className='close_icon' onClick={closeUserPanel}>
						<i className='fa-solid fa-times'></i>
					</span>
					<img src='https://placehold.co/50x50/red/white' alt='User Image' />

					<span className='hello'>Hello, User!</span>

					<div className='user_buttons'>
						<button className='left_button'>Profile edit</button>
						<button className='right_button'>Exit</button>
					</div>
				</motion.div>
			</Modal>
		</header>
	)
}