import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';

import JewelryOrdersTable from "./components/JewelryOrders/JewelryOrdersTable";


import MessageBoxAcrossApplication from './components/Utilities/MessageBoxAcrossApplication'
import MessageBoxAcrossApplicationProvider from "./Context/MessageBoxAcrossApplicationContext"
import AlertAcrossApplication from './components/Utilities/AlertAcrossApplication'
import AlertAcrossApplicatioProvider from "./Context/AlertAcrossApplicationContext";


export default function App() {
  return (
    <BrowserRouter> 
      <Header />
      
      <AlertAcrossApplicatioProvider>
        
      <AlertAcrossApplication />
      <MessageBoxAcrossApplicationProvider>
       <MessageBoxAcrossApplication/>
       <Container>  
      <Routes>
        <Route path="/jewelry_orders" element={<JewelryOrdersTable />} />        
      </Routes>
      </Container>

     
      </MessageBoxAcrossApplicationProvider>  
    </AlertAcrossApplicatioProvider>

    </BrowserRouter>
  );
}
