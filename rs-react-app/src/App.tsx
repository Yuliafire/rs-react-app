import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import HomePage from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/not-found/Notfound';

const HOME_PATH = '/';
const RESERVE_HOME_PATH = '/home';
const ABOUTPAGE_PATH = '/about';
const NOTFOUND_PATH = '*';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={RESERVE_HOME_PATH} element={<HomePage />} />
          <Route path={ABOUTPAGE_PATH} element={<About />} />
          <Route path={NOTFOUND_PATH} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
