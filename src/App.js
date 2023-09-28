import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element = {<ItemListContainer />} />
          <Route path={"/category/:id"} element = {<ItemListContainer />} />
          <Route path={"/item/:id"} element = {<ItemDetailContainer />} />
          <Route path={"/*"} element = {<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;