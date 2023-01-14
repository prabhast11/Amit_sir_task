import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Myform from './components/Myform';
import Providers from './components/Providers';
import Serverdetail from './components/Serverdetails';
import Customers from './components/Customers';
import Did from './components/Did';
import Services from './components/Services';
import Telcoprovider from './components/Telcoprovider';
import Palatnumber from './components/Palatnumber';
import Serverdetailsform from './forms/Serverdetailsform';
import Providersform from './forms/Providersform';
import Customersform from './forms/Customersform';
import Didform from './forms/Didform';
import Servicesform from './forms/Servicesform';
import Telcoproviderform from './forms/Telcoproviderform';
import Palatnumberform from './forms/Palatnumberform';
import Dialerlink from './Dialerlink';


function App() {
  return (
   
 <Router>
      <MyNavbar/>
        <Routes>
          <Route path="/serverdetails" element={<Serverdetail/>}/>
          <Route path="/providers" element={<Providers/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/did" element={<Did/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/telcoprovider" element={<Telcoprovider/>}/>
          <Route path="/palatnumber" element={<Palatnumber/>}/>
          <Route path="/serverdetailsform" element={<Serverdetailsform/>}/>
          <Route path="/providersform" element={<Providersform/>}/>
          <Route path="/customersform" element={<Customersform/>}/>
          <Route path="/didform" element={<Didform/>}/>
          <Route path="/servicesform" element={<Servicesform/>}/>
          <Route path="/telcoproviderform" element={<Telcoproviderform/>}/>
          <Route path="/palatnumberform" element={<Palatnumberform/>}/>
          <Route path="/dialerlink" element={<Dialerlink/>}/>
        </Routes>
        
      </Router> 
  );
}

export default App;
