import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AboutView from './components/AboutView';
import HomeView from './components/HomeView';
import RedirectView from './components/RedirectView';
import ShowsView from './components/ShowsView';
import MerchView from './components/MerchView';
import ContactView from './components/ContactView';
import PhotosView from './components/PhotosView';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/shows' element={<ShowsView />} />
          <Route path='/photos' element={<PhotosView />} />
          <Route path='/merch' element={<MerchView />} />
          <Route path='/contact' element={<ContactView />} />
          <Route path='*' element={<RedirectView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
