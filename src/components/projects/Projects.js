import AnimatedSection from './AnimatedSection';
import Title from './Title';
import ProjectsCard from './ProjectsCard';
import prjOne from '../../assets/prjOne.png';
import prjTwo from '../../assets/prjTwo.png';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black text-[#000000b3]">
      <AnimatedSection>
        <div className="flex justify-center font-titleFont items-center text-center">
          <Title title="Projects 🔨" />
        </div>
      </AnimatedSection>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20 mx-10">
        <AnimatedSection delay={0.2}>
          <ProjectsCard
            title="Pricegrab"
            des="'Pricegrab' is an online shopping tool that helps you find products by searching various websites..."
            src={prjOne}
            github={"https://github.com/AhmadRFC/process_scheduling_solver"}
          />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <ProjectsCard
            title="Processor Scheduler"
            des="'Processor Scheduler' is a scheduling processing solver that takes process details from a text file..."
            src={prjTwo}
            github={"https://github.com/PriceGrab/pricegrab"}
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;