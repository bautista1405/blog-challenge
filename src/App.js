import {Route} from 'wouter'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import Home from './pages/Home/index'
import Details from './pages/Details/index'
import Login from './pages/Login/Login';
import { UserContextProvider } from './context/userContext'
import EditionForm from './pages/EditionForm';
import CreateForm from './pages/CreationForm';


import ProtectedRoute from './services/ProtectedRoute';
import EditForm from './components/EditForm';
import Post from './components/Post';


function App() {
  

  return (
     <UserContextProvider> {/*con el context provider envolviendo la totalidad de nuestra app, 
                            podremos utilizar al mismo en cualquier parte de la app*/}
        <Router>
          {/*con el elemento 'Route' de wouter establecemos las rutas de nuestra app*/}
          <Route 
            component={Home}
            path='/'
          />

          <Route 
            component={Details}
            path='/details'
          />
          
          <Route 
            component={Login}
            path='/login'
          />

          <Route 
            component={EditionForm}
            path='/edition-form'
          />

          <Route 
            component={CreateForm}
            path='/creation-form'
          />

          <ProtectedRoute               
            path='/creation-form' component={CreateForm} 
          />

          <ProtectedRoute
            path='/edition-form' component={EditForm}     // con el service 'ProtectedRoute' protegemos las rutas privadas
          />

          <ProtectedRoute
            path='/details' component={Post} 
          />
        </Router>
      </UserContextProvider>
      
    
  );
}

export default App;
