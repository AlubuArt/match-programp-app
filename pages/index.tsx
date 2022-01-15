import type { GetStaticProps, NextPage } from "next";
import { getMatchPrograms } from "../lib/graphcms";
import ProgramLayout from "../ui/components/Layouts/ProgramLayout/ProgramLayout";

const Home: NextPage = (program: any) => {
    return (
        <div className="container mx-auto bg-body-image">
          <div className="container mx-auto bg-gradient-to-b from-blue to-dark-blue opacity-95">
            <ProgramLayout matches={program.program.matchesInProgram} />
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
