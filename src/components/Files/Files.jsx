import './Files.css'
import SelectFiles from '../SelectFiles/SelectFiles'
import Table from '../Table/Table'

export default function Files() {
	return (
		<article className='scrollable_content'>
			<SelectFiles />
			<Table />
		</article>
	)
}
