import './Block.css'

export default function Block({ name, type, lastChange, size }) {
	return (
		<div className='block'>
			<div className='block_header'>
				<img src={`/images/file_icons/${type}.svg`} className='file_icon' />
				<span>{name}</span>
			</div>
			<div className='block_options'>
				<i className='fa-solid fa-download'></i>
				<i className='fa-regular fa-pen-to-square'></i>
				<i className='fa-regular fa-star'></i>
				<i className='fa-regular fa-trash-can'></i>
			</div>
			<div className='block_footer'>
				<span>{lastChange}</span>
				<span>{size}</span>
			</div>
		</div>
	)
}
