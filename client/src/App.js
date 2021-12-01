import React from 'react' 
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from './screens/ProductsScreen';
const App=()=> {
  return (
    <div className="App">
      <Router>
      <Header />
      
      <main className="py-3">
        
        <Container>
           
              <Route path='/' component={HomeScreen} exact />
              <Route path='/product/:_id' component={ProductsScreen} />
        </Container>
      </main>
     
       <Footer />
     
    </Router>
      
      

      
      
    </div>
  );
}

export default App;
