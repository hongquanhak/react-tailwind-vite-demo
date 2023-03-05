import { About } from './components/About/about';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { MV } from './components/MV/mv';
import { Problem } from './components/Problem/problem';
import { Support } from './components/Support/support';

function App() {
  return (
    <>
      <Header />
      <div className='main mt-[73px]'>
        <MV />
        <Problem />
        <About />
        <Support />
      </div>
      <Footer />
    </>
  );
}

export default App;
