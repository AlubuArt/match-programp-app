import type { GetServerSideProps,  NextPage } from "next";
import { useEffect, useState } from "react";
import { getMatchPrograms } from "../lib/graphcms";
import Footer from "../ui/components/Footer/Footer";
import Header from "../ui/components/Header/Header";
import ProgramLayout from "../ui/components/Layouts/ProgramLayout/ProgramLayout";
import Pagnation from "../ui/components/Pagnation/Pagnation";
import TagManager from 'react-gtm-module';

const Home: NextPage = (program: any) => {

    let [selectedRound, setSelectedRound] = useState(0);

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-WF57VTL' });
       
    }, [])

    return (
        <div className="mx-auto bg-body-image min-h-screen relative">
            <div className=" mx-auto bg-gradient-to-b from-dark-blue to-blue opacity-95 min-h-screen ">
              <Header />
                <ProgramLayout
                    matches={
                        program.program.matchPrograms[selectedRound]
                            .matchesInProgram
                    }
                    sponsor={""}
                    
                />
        {/*     <Pagnation list={program.program.matchPrograms} selectedRound={selectedRound} setSelectedRound={setSelectedRound}/> */}
            <Footer text={"Lavet med ❤️   for lokal amatør fodbold"} />
                
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const program = await getMatchPrograms();

    return {
        props: { program }
    };
};

export default Home;
