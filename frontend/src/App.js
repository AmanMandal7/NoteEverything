import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/register' element={<RegisterScreen />} />
        <Route exact path='/mynotes' element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);


export default App;
