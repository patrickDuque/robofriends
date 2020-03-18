import React from 'react';

const SeachBox = ({ searchfield, searchChange }) => {
	return (
		<input
			className='pa3 ba b--green bg-lightest-blue tc'
			type='text'
			placeholder='seach robots'
			onChange={searchChange}
		/>
	);
};

export default SeachBox;
