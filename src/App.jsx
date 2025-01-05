import ButtonGradient from './assets/svg/ButtonGradient'
import Benifits from './components/Benifits'
import ComponyLogo from './components/ComponyLogo'
import Header from './components/Header'
import Collaboration from './components/Collaboration'
import RoadMap from './components/Roadmap'
import Footer from './components/Footer'

function App() {

  return (
    <>



      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <Header />
      </div>
      <ButtonGradient />
      <ComponyLogo />
      <Benifits />
      <Collaboration />
      <RoadMap />
      <Footer />

    </>
  )
}

export default App
