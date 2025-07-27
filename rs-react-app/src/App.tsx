import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/not-found/Notfound';
import CharacterDetailsComponent from './components/CharacterDetails/CharacterDetails';

const HOME_PATH = '/';
const DYNAMIC_PAGE_PATH = '/:page';
const ABOUT_PATH = '/about';
const NOT_FOUND_PATH = '*';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path={HOME_PATH}
            element={<Home />}
            errorElement={<div>Error in Home or Details</div>}
          />
          <Route path={DYNAMIC_PAGE_PATH} element={<Home />}>
            <Route path=":id" element={<CharacterDetailsComponent />} />
          </Route>
          <Route
            path={ABOUT_PATH}
            element={<About />}
            errorElement={<div>Error in About</div>}
          />
          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
