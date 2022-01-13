import react from 'react';

interface MatchCardProps {
    match: Models.Match;
}


const MatchCard: React.FC<MatchCardProps> = ({match}) => {
    return (
        <>
        <h3>Home team: {match.homeTeam}</h3>
        <h3>Away team: {match.awayTeam}</h3>
        </>

    )
}

export default MatchCard;