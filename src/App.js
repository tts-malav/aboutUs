import './App.css';
import Backers from './components/Backers';
import TwoSectionsPage1 from './components/Bottom1';
import ImageGrid from './components/ImageGrid';
import ImageGrid2 from './components/ImageGrid2';
import Navbar1 from './components/NavBar1';
import Page1 from './components/Page1';
import Pic1 from './components/Pic';
import FixedContainer from './components/Team';


function App() {
  return (
    <>
      <Navbar1 />
      <Page1 />
      <ImageGrid />
      <Pic1 />
      <ImageGrid2 />
      <FixedContainer />
      <Backers />
      <TwoSectionsPage1 />
    </>
  );
}

export default App;
