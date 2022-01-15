import React from "react";
import MatchCard from "../../MatchCard/MatchCard";

interface ProgramLayoutProps {
    matches: Array<Models.Match>;
}

export const ProgramLayout: React.FC<ProgramLayoutProps> = ({ matches }) => {
    return (
        <div className="container mx-auto">
            <div className="container pt-10  w-4/5 mx-auto text-center font-sans text-white">
                <h1 className="text-5xl font-bold">Match Day!</h1>
                <h2 className="text-3xl font-medium"> Lørdag d. 13/3</h2>
            </div>
            <div className="container py-20 w-3/5  mx-auto">
                {matches.map((match, index) => {
                    return <MatchCard match={match} key={index} />;
                })}
            </div>
        </div>
    );
};

export default ProgramLayout;
