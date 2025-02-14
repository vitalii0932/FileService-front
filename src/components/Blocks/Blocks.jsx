import './Blocks.css'
import Block from '../Block/Block'
import { useState } from 'react'

export default function Blocks() {
	const [files, setFiles] = useState([
		{id: 1, name: 'Data 1', type: 'archive', lastChange: '20.01.2025', size: '1mb'},
		{id: 2, name: 'Data 2', type: 'audio', lastChange: '15.10.2024', size: '2mb'},
		{id: 3, name: 'Data 3', type: 'excel', lastChange: '12.12.2012', size: '3mb'},
		{id: 4, name: 'Data 4', type: 'folder', lastChange: '03.05.2004', size: '4mb'},
		{id: 5, name: 'Data 5', type: 'video', lastChange: '05.07.2021', size: '5mb'},
		{id: 6, name: 'Data 6', type: 'photo', lastChange: '14.02.2024', size: '6mb'},
		{id: 7, name: 'Data 7', type: 'pptx', lastChange: '12.05.2007', size: '7mb'},
		{id: 8, name: 'Data 8', type: 'video', lastChange: '18.01.2025', size: '8mb'},
		{id: 9, name: 'Data 9', type: 'word', lastChange: '21.06.2024', size: '9mb'},
		{id: 10, name: 'Data 10', type: 'archive', lastChange: '30.09.2023', size: '10mb'},
		{id: 11, name: 'Data 11', type: 'audio', lastChange: '01.01.2022', size: '11mb'},
		{id: 12, name: 'Data 12', type: 'excel', lastChange: '02.02.2021', size: '12mb'},
		{id: 13, name: 'Data 13', type: 'folder', lastChange: '03.03.2020', size: '13mb'},
		{id: 14, name: 'Data 14', type: 'photo', lastChange: '04.04.2019', size: '14mb'},
		{id: 15, name: 'Data 15', type: 'pptx', lastChange: '05.05.2018', size: '15mb'}
	])

	const onChange = (id, newName) => {
		setFiles((prevData) => 
			prevData.map((file) => 
				file.id === id ? {...file, name: newName} : file
			)
		)
	}

	return (
		<section className='blocks'>
			{files.map((file) => (
				<Block key={file.id} name={file.name} type={file.type} lastChange={file.lastChange} size={file.size} />
			))}
		</section>
	)
}