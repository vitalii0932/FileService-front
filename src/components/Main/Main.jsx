import './Main.css'
import LeftSide from '../LeftSide/LeftSide'
import Files from '../Files/Files'

export default function Main() {
	return (
		<section className='main'>
			<LeftSide />
			<Files />
		</section>
	)
}