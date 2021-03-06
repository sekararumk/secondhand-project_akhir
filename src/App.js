import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoAkun from './Pages/InfoAkun/InfoAkun';
import InfoProduk from './Pages/InfoProduk/InfoProduk';
import InfoPenawaran from './Pages/InfoPenawaran/InfoPenawaran';
import DetailProduk from './Pages/DetailProduk/DetailProduk';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import DaftarJual from './Pages/DaftarJual/DaftarJual';
import Homepage from './Pages/Homepage/Homepage';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
            <Route path="login" element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='homepage' element={<Homepage />} />
            <Route path="info-akun" element={<InfoAkun />} />
            <Route path="info-produk" element={<InfoProduk />} />
            <Route path="detail-produk" element={<DetailProduk />} />
            <Route path='daftar-jual' element={<DaftarJual/>} />
            <Route path="info-penawaran" element={<InfoPenawaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;