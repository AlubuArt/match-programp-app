import React from 'react';
import Image  from 'next/image';
import Logo  from '../../../public/jysk-rejsebureau-logo.svg';

interface SponsorCardProps {
	logo: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({logo}) => {
	return (
		<div className='container  mx-auto p-2 bg-white w-4/5 '>
			
			<Image alt={""} src={logo} height={30} width={100}layout={"responsive"}/> 
		</div>
	);
};

export default SponsorCard;
