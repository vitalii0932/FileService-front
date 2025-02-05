import { useState } from 'react'
import './ControlPanel.css'

export default function ControlPanel() {
	const [progress, setProgress] = useState(45)
	const [isActiveBtn, setIsActiveBtn] = useState(0)

	return (
		<div className='sidebar_pages_buttons'>
			<button
				className={isActiveBtn === 0 ? 'active' : ''}
				onClick={() => setIsActiveBtn(0)}
			>
				<i className='fa-solid fa-house'></i>Home page
			</button>

			<button
				className={isActiveBtn === 1 ? 'active' : ''}
				onClick={() => setIsActiveBtn(1)}
			>
				<i className='fa-solid fa-star'></i>With start
			</button>

			<button
				className={isActiveBtn === 2 ? 'active' : ''}
				onClick={() => setIsActiveBtn(2)}
			>
				<i className='fa-solid fa-trash'></i> Trash
			</button>

			<div className='fill'>
				<span>Used {progress} %</span>
				<div className='progress_bar'>
					<div className='progress_fill' style={{ width: `${progress}%` }} />
				</div>
			</div>
		</div>
	)
}
