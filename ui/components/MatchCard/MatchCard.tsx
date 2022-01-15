import react from 'react';

interface MatchCardProps {
    match: Models.Match;
}


const MatchCard: React.FC<MatchCardProps> = ({match}) => {
    return (
        <div className="container mb-20 text-center bg-slate-600 font-sans text-white">
            <div className="container text-center p-2">
                <h3 className="text-1xl">{match.leagueName}</h3>
            </div>
            <div className="flex flex-row ">
                <div className="container basis-3/7 p-2">
                    <h3 className="text-2xl font-bold">{match.homeTeam}</h3>
                </div>
                <div className="container basis-1/6 text-center p-2 "> - </div>
                <div className="container basis-3/7 text-center p-2">
                    <h3 className="text-2xl font-bold">{match.awayTeam}</h3>
                </div>
            </div>
            <div>
                <h3>Kickoff: {match.kickoff}</h3>
            </div>
        </div>

    )
}

export default MatchCard;