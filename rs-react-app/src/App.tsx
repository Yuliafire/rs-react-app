import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/not-found/Notfound';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

const HOME_PATH = '/';
const RESERVE_HOME_PATH = '/home';
const DETAILS_PATH = '/home/:id';
const ABOUTPAGE_PATH = '/about';
const NOTFOUND_PATH = '*';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path={HOME_PATH}
            element={<Navigate to={RESERVE_HOME_PATH} replace />}
          />
          <Route
            path={RESERVE_HOME_PATH}
            element={<Home />}
            errorElement={<div>Error in Home or Details</div>}
          >
            <Route path={DETAILS_PATH} element={<CharacterDetails />} />
          </Route>
          <Route
            path={ABOUTPAGE_PATH}
            element={<About />}
            errorElement={<div>Error in About</div>}
          />
          <Route path={NOTFOUND_PATH} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
