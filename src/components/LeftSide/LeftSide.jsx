import './LeftSide.css'
import AddBtn from '../AddBtn/AddBtn'
import ControlPanel from '../ControlPanel/ControlPanel'

export default function LeftSide() {
	return (
		<aside className='sidebar'>
			<AddBtn />
			<ControlPanel />
		</aside>
	)
}
