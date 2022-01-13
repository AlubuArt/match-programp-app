import type { GetStaticProps, NextPage } from 'next'
import { getMatchPrograms } from '../lib/graphcms';




const Home: NextPage = (program: any) => {

  console.log(program.program.matchesInProgram)
 
 

  return (
    <>
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