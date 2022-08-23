import React from "react";
import Footer from "../../Footer/Footer";
import Header from '../../Header/Header'
import MatchCard from "../../MatchCard/MatchCard";
import Pagnation from "../../Pagnation/Pagnation";
import SponsorCard from "../../SponsorCard/SponsorCard";

interface ProgramLayoutProps {
    matches: Array<Models.Match>;
    sponsorLogo: Models.SponsorLogo["url"];
}



export const ProgramLayout: React.FC<ProgramLayoutProps> = ({ matches, sponsorLogo }) => {

    
    return (
        <div className="container mx-auto md:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-1/4">
            
            <div className="container mx-auto">
                <div className="container pb-5 pt-2 px-10">
                    <SponsorCard logo={sponsorLogo}/>
                </div>
                
                {matches.map((match, index) => {
                    return <MatchCard match={match} key={index} />;
                })}
            </div>
            
        </div>
    );
};

export default ProgramLayout;
