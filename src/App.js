import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import AddStoreComponent from './components/AddStoreComponent';
import ViewStoreComponent from './components/ViewStoreComponent';
import SearchStoreComponent from './components/SearchStoreComponent';
import ListStoreComponent from './components/ListStoreComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ContactUsComponent from './components/ContactUsComponent';
import TncComponent from './components/TncComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FbDetailsComponent from './components/FbDetailsComponent';
import './App.css';

function App() {
  return (

    
    <div>
      <HeaderComponent></HeaderComponent>
      <Router>
        <div className="container-fluid" style={{ padding: "0px" }}>
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route path="/users" element={<HomeComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/dash" element={<DashboardComponent />} />
            <Route path="/addStore/:storeid" element={<AddStoreComponent />} />
            <Route path="/search" element={<SearchStoreComponent />} />
            <Route path="/search-store/:searchKeyword" element={<SearchStoreComponent />} />
            <Route path="/view-store/:storeid" element={<ViewStoreComponent />} />
            <Route path="/list-stores" element={<ListStoreComponent />} />
            <Route path="/about" element={<AboutUsComponent />} />
            <Route path="/contact" element={<ContactUsComponent />} />
            <Route path="/terms" element={<TncComponent />} />
            <Route path="/fbdashboard" element={<FbDetailsComponent />} />
          </Routes>
        </div>
      </Router>
      <FooterComponent></FooterComponent>
    </div>
  );
}
export default App;
