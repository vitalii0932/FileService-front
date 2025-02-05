import './Search.css'

export default function Search() {
	return (
		<div className='search'>
			<i className='fa fa-search fa-lg ' aria-hidden='true'></i>
			<input type='text' name='search' autoComplete='off' />
		</div>
	)
}
