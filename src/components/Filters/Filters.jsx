import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Filters.css';

export default function Filters() {
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (dropdownName) => {
		if (openDropdown === dropdownName) {
			setOpenDropdown(null); // Close if it's already open
		} else {
			setOpenDropdown(dropdownName); // Open the selected dropdown
		}
	};

	// Animation variants for dropdown
	const dropdownVariants = {
		open: { opacity: 1, y: 0, display: 'block' },
		closed: { opacity: 0, y: -10, transitionEnd: { display: 'none' } },
	};

	return (
		<div className='filters'>
			{/* Type Filter */}
			<div className='filter' onClick={() => toggleDropdown('type')}>
				<i className='fa-regular fa-file'></i> Type {openDropdown === 'type' ? <span>&#9654;</span> : <span>&#9660;</span>} 

				<AnimatePresence>
					{openDropdown === 'type' && (
						<motion.div
							className='dropdown_menu_filter'
							initial="closed"
							animate="open"
							exit="closed"
							variants={dropdownVariants}
							transition={{ duration: 0.3 }}
						>
							<ul>
								<li><i className='fa-regular fa-file-word'></i>Document</li>
								<li><i className='fa-regular fa-file-excel'></i>Excel Table</li>
								<li><i className='fa-regular fa-file-powerpoint'></i>Presentations</li>
								<li><i className='fa-regular fa-file-image'></i>Photos and Images</li>
								<li><i className='fa-regular fa-file-video'></i>Videos</li>
								<li><i className='fa-regular fa-file-audio'></i>Audios</li>
								<li><i className='fa-regular fa-folder'></i>Folders</li>
								<li><i className='fa-regular fa-file-zipper'></i>Archives (.zip et. c.)</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Updated Filter */}
			<div className='filter' onClick={() => toggleDropdown('updated')}>
				<i className='fa-regular fa-calendar'></i> Updated {openDropdown === 'updated' ? <span>&#9654;</span> : <span>&#9660;</span>} 
				<AnimatePresence>
					{openDropdown === 'updated' && (
						<motion.div
							className='dropdown_menu_filter'
							initial="closed"
							animate="open"
							exit="closed"
							variants={dropdownVariants}
							transition={{ duration: 0.3 }}
						>
							<ul>
								<li><i className='fa-regular fa-clock'></i>Today</li>
								<li><i className='fa-regular fa-clock'></i>Last 7 days</li>
								<li><i className='fa-regular fa-clock'></i>Last 30 days</li>
								<li><i className='fa-regular fa-clock'></i>This year</li>
								<li><i className='fa-regular fa-clock'></i>Last year</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Size Filter */}
			<div className='filter' onClick={() => toggleDropdown('size')}>
				<i className='fa-regular fa-file'></i> Size {openDropdown === 'size' ? <span>&#9654;</span> : <span>&#9660;</span>} 
				<AnimatePresence>
					{openDropdown === 'size' && (
						<motion.div
							className='dropdown_menu_filter'
							initial="closed"
							animate="open"
							exit="closed"
							variants={dropdownVariants}
							transition={{ duration: 0.3 }}
						>
							<ul>
								<li>Small</li>
								<li>Medium</li>
								<li>Large</li>
								<li>Extra Large</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}