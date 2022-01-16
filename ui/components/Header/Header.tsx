import React from 'react';


const Header: React.FC = () => {

    return (
        <div className="container pt-10  w-5/5 mx-auto text-white">
                <div className="text-center ">
                    <h1 className="text-6xl font-black font-header italic">KAMPDAG!</h1>
                </div>
                <div className="text-right pr-5 pl-5">
                    <h2 className="text-1xl font-bold italic">
                        Welcome to Hell!
                    </h2>
                </div>
            </div>
    )
}

export default Header;