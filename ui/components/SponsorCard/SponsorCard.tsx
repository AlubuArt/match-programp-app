import React from 'react';
import Image  from 'next/image';
import Logo  from '../../../public/jysk-rejsebureau-logo.svg';

interface SponsorCardProps {
	logo: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({}) => {
	return (
		<div className='container mx-auto p-2 bg-white w-5/5 '>
			
			<Image alt={""} src={Logo} /> 
		</div>
	);
};

export default SponsorCard;
