import type { GetStaticProps, NextPage } from 'next'
import { getMatchPrograms } from '../lib/graphcms';
import ProgramLayout from '../ui/components/Layouts/ProgramLayout/ProgramLayout';




const Home: NextPage = (program: any) => {

  console.log(program.program.matchesInProgram)
 
 

  return (
    <>
    <ProgramLayout matches={program.program.matchesInProgram} />
    </>

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