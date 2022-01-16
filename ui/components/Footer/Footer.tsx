import React from 'react';

interface FooterProps {
    text: string;
}



const Footer: React.FC<FooterProps> = ({text}) => {

    return (
        <div className="container wd-1/5 mx-auto text-center text-white italic text-xs">
            <p>{text}</p>
            <p>For eget kampprogram, kontakt: jc@jcvisueldesign.dk</p>
        </div>
    )
}

export default Footer;