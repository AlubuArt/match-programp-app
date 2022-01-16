import React from "react";
import MatchCard from "../../MatchCard/MatchCard";

interface ProgramLayoutProps {
    matches: Array<Models.Match>;
}

export const ProgramLayout: React.FC<ProgramLayoutProps> = ({ matches }) => {
    return (
        <div className="container mx-auto md:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-1/4">
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
            <div></div>
            <div className="container py-10  mx-auto">
                {matches.map((match, index) => {
                    return <MatchCard match={match} key={index} />;
                })}
            </div>
        </div>
    );
};

export default ProgramLayout;
