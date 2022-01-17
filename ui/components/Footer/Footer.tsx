import React from 'react';

interface FooterProps {
    text: string;
}



const Footer: React.FC<FooterProps> = ({text}) => {

    return (
        <div className="opacity-75 container w-5/5 mx-auto text-center text-white italic text-xs absolute left-0 right-0 bottom-5">
            <p>{text}</p>
            <p>For eget kampprogram, kontakt: jc@jcvisueldesign.dk</p>
        </div>
    )
}

export default Footer;