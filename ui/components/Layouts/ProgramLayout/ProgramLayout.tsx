import React from "react";
import Footer from "../../Footer/Footer";
import Header from '../../Header/Header'
import MatchCard from "../../MatchCard/MatchCard";

interface ProgramLayoutProps {
    matches: Array<Models.Match>;
}

export const ProgramLayout: React.FC<ProgramLayoutProps> = ({ matches }) => {
    return (
        <div className="container mx-auto md:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-1/4">
            <Header />
            <div></div>
            <div className="container py-10  mx-auto">
                {matches.map((match, index) => {
                    return <MatchCard match={match} key={index} />;
                })}
            </div>
            <Footer text={"Lavet med ❤️   for lokal amatør fodbold"} />
        </div>
    );
};

export default ProgramLayout;
