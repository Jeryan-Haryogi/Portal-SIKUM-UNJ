import logo from './logo.svg';
import NavbarElement from './component/NavbarElement';
import HeaderElement from './component/HeaderElement';
import TwoContentElement from './component/TwoContentElement';
import ThreeContentElement from './component/ThreeContentElement'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-bootstrap';
function App() {
  return (
    <>
    <NavbarElement/>
    <HeaderElement img='https://image.freepik.com/free-vector/online-education-service-flat-vector-concept_81522-3732.jpg' judul='SIKUM' sktn='Sistem Kurikulum'/>
    <TwoContentElement/>
    <ThreeContentElement/>
  </>
  );
}

export default App;
