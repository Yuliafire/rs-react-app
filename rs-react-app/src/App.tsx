import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/not-found/Notfound';
import CharacterDetailsComponent from './components/CharacterDetails/CharacterDetails';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Home />}
            errorElement={<div>Error in Home or Details</div>}
          />
          <Route path="/:page" element={<Home />}>
            <Route path=":id" element={<CharacterDetailsComponent />} />
          </Route>
          <Route
            path="/about"
            element={<About />}
            errorElement={<div>Error in About</div>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
