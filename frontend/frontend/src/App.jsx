import Welcome from './components/Welcome';  
import WelcomeClass from './components/WelcomeClass';  
import UseExample from './components/UseExample';
import OptimisticExample from './components/OptimisticExample';
import UserProfile from './components/UserProfile';
import MemoExample from './components/MemoExample';
import CallbackExample from './components/useCallback';
import UseContext from './components/useContext';
import RefExample from './components/useRef';
import Card from './components/Card';
import Parent from './components/Parent';
import ThemeProvider from './context/ThemeProvider';
import GrandchildContext from './components/GrandchildContext';
import { useTheme } from './context/useTheme';
import SuspenseExample from './components/SuspenseExample';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const About = lazy(() => import('./pages/About'));



const AppContent = () => {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#111' : '#ffffff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px',
    transition: '0.3s'
  };

  return (
    <div style={appStyle}>
      <h1>Global Theme Applied</h1>
      <GrandchildContext />
    </div>
  );
};


function App() {
  return (
    <div>
      <Welcome />
      <WelcomeClass />
      <UseExample />
      <OptimisticExample />
      <UserProfile />
      <MemoExample />
      <br/><br/>
      <CallbackExample/>
      <br/> <br></br>
      <UseContext/>
      <br/>
      <RefExample/>
      <br></br>
      <Card>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
      <br></br>
        <h1>Prop Drilling </h1>
      <Parent />
    
      <br></br>

      <ThemeProvider>
      <AppContent />
    </ThemeProvider>

    <br></br>

         <SuspenseExample />

    <br></br>
    
<BrowserRouter>
      <Suspense fallback={<h3>Loading page...</h3>}>
        <Routes>
          {/* Wrap routes in layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />            
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>


  </div>
   
  );
}

export default App;


