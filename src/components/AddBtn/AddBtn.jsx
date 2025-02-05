import React, { useState } from 'react'
import Modal from 'react-modal' // Імпортуємо бібліотеку для модальних вікон
import './AddBtn.css'

Modal.setAppElement('#root') // Вказуємо корінь елементу, щоб забезпечити доступність для скрінрідерів

export default function AddBtn() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Відкриття модального вікна
	const openModal = () => {
		setIsModalOpen(true)
	}

	// Закриття модального вікна
	const closeModal = () => {
		setIsModalOpen(false)
	}

	// Обробник вибору файлів
	const handleFileSelect = event => {
		const files = event.target.files
		console.log(files) // Вивести файли в консоль для перевірки
	}

	// Обробник перетягування файлів
	const handleDrop = event => {
		event.preventDefault()
		const files = event.dataTransfer.files
		console.log(files) // Вивести файли в консоль для перевірки
	}

	return (
		<div>
			<button className='create_btn' onClick={openModal}>
				<i className='fa-solid fa-plus'></i> Add file
			</button>

			{/* Модальне вікно */}
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel='Add Files Modal'
				className='modal'
				overlayClassName='overlay'
			>
				<div className='modal_content'>
					<span className='close' onClick={closeModal}>
						&times;
					</span>
					<h2>Add files or drop</h2>

					<div
						className='drop_area'
						onDragOver={e => e.preventDefault()}
						onDrop={handleDrop}
					>
						<p>Drop files here</p>
					</div>

					{/* Вибір файлів через input */}
					<label className='custom-file-upload'>
						<i className='fa-solid fa-plus'></i> Select files
						<input
							type='file'
							multiple
							onChange={handleFileSelect}
							title='Select files'
						/>
					</label>
				</div>
			</Modal>
		</div>
	)
}
