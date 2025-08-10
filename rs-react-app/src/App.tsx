import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/not-found/Notfound';
import CharacterDetailsComponent from './components/CharacterDetails/CharacterDetails';
import Flyout from './components/Flyout/Flyout';

const HOME_PATH = '/';
const RESERVE_HOME_PATH = '/index.html';
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
          <Route
            path={ABOUT_PATH}
            element={<About />}
            errorElement={<div>Error in About</div>}
          />
          <Route path={RESERVE_HOME_PATH} element={<Home />} />
          <Route path={DYNAMIC_PAGE_PATH} element={<Home />}>
            <Route
              path=":id"
              element={<CharacterDetailsComponent />}
              errorElement={<div>Error in Character Details</div>}
            />
            <Route path="/:page(\d+)" element={<Home />}>
              <Route path=":id" element={<CharacterDetailsComponent />} />
            </Route>
          </Route>

          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
        </Routes>
      </main>
      <Flyout />
      <Footer />
    </div>
  );
};

export default App;
