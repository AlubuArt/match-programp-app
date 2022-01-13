import type { GetStaticProps, NextPage } from 'next'
import { getMatchPrograms } from '../lib/graphcms';
import ProgramLayout from '../ui/components/Layouts/ProgramLayout/ProgramLayout';




const Home: NextPage = (program: any) => {

  
 
 

  return (
    <div className="container mx-auto bg-sky-500/100" >
    <ProgramLayout matches={program.program.matchesInProgram} />
    </div>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const program = await getMatchPrograms();

  return {
      props: { program },
      revalidate: 60,
  };
};


export default Home;