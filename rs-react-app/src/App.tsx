import { useState } from 'react';
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
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const handleThrowError = () => {
    setShouldThrowError(true);
  };

  if (shouldThrowError) {
    throw new Error('Test error from Error button');
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={RESERVE_HOME_PATH} element={<HomePage />} />
          <Route path={ABOUTPAGE_PATH} element={<About />} />
          <Route path={NOTFOUND_PATH} element={<NotFound />} />
        </Routes>
      </main>
      <button onClick={handleThrowError} type="button">
        Error Button
      </button>
      <Footer />
    </div>
  );
};

export default App;
