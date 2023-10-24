import Projects from './sections/projects';
import Footer from './sections/footer';
import Hero from './sections/hero';
import cnf from './config';

const Xavier2pfr = () => (
  <>
    <Hero />
    <Projects projects={cnf.projects} />
    <Footer />
  </>
);

export default Xavier2pfr;
