import type { GetStaticProps, NextPage } from "next";
import { getMatchPrograms } from "../lib/graphcms";
import Footer from "../ui/components/Footer/Footer";
import ProgramLayout from "../ui/components/Layouts/ProgramLayout/ProgramLayout";

const Home: NextPage = (program: any) => {


  
    return (
        <div className="mx-auto bg-body-image min-h-screen ">
          <div className=" mx-auto bg-gradient-to-b from-dark-blue to-blue opacity-95 min-h-screen">
            <ProgramLayout matches={program.program.matchesInProgram} />
            <Footer text={"Lavet med ❤️   for lokal amatør fodbold"} />
          </div>
          
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const program = await getMatchPrograms();

    return {
        props: { program },
        revalidate: 60,
    };
};

export default Home;
