import React from 'react';
import MatchCard from '../../MatchCard/MatchCard';


interface ProgramLayoutProps {
    matches: Array<Models.Match>
}


export const ProgramLayout: React.FC<ProgramLayoutProps> = ({matches}) => {
    return ( 
        <>
            <h2>Coming matches in round </h2>
        {
            matches.map((match, index) => {
                return (
                <MatchCard match={match} key={index}/> )
                })
        }
        
        </>
    )
}

export default ProgramLayout;