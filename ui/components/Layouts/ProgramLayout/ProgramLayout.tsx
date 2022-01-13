import React from 'react';
import MatchCard from '../../MatchCard/MatchCard';


interface ProgramLayoutProps {
    matches: Array<Models.Match>
}


export const ProgramLayout: React.FC<ProgramLayoutProps> = ({matches}) => {
    return ( 
        <div className="container mx-auto" >
            <div className="container w-4/5 bg-white mx-auto ">
                <h1 >Match program for week</h1>
            </div>
            

<h2>Home</h2>


        {/* {
            matches.map((match, index) => {
                return (
                <MatchCard match={match} key={index}/> )
                })
        } */}
        
        </div>
    )
}

export default ProgramLayout;