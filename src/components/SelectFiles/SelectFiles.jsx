import Filters from '../Filters/Filters'
import Search from '../Search/Search'
import ToggleView from '../ToggleView/ToggleView'
import './SelectFiles.css'

export default function SelectFiles() {
	return (
		<section>
			<Search />
			<Filters />
			<ToggleView />
		</section>
	)
}
