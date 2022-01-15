import react from "react";

interface MatchCardProps {
    match: Models.Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    return (
        <div className="container mb-10 px-3 font-header italic bg-noise text-white ">
            <div className="container bg-card-gradient border box-border border-white border-solid rounded-xl">
                <div className="p-2">
                    <div className="text-left">
                        <h2 className="text-2xl">{match.homeTeam}</h2>
                    </div>
                    <div className="text-center">
                        <p>vs</p>
                    </div>
                    <div className="text-right">
                    <h2 className="text-2xl">{match.awayTeam}</h2>
                    </div>
                </div>

                
            </div>
            <div  className="flex font-match-info">
                    <p className="basis-6/12 text-left">{match.leagueName}</p>
                    <p className="basis-6/12 text-center">{match.matchDate}</p>
                    <p className="basis-6/12 text-right">Kickoff: {match.kickoff}</p>
                
                </div>
        </div>
    );
};

export default MatchCard;
