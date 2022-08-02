import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './components.js/homepage/home';

import MultiForm from './components.js/forms/multi-form';
import Payment from './components.js/forms/payment';
import MultiFormExtend from './components.js/forms-extend/multi-form';
import Dashboard from './components.js/dashboard/dashboard';
import UserInfo from './components.js/dashboard/user-info';
import Login from './components.js/dashboard/login';
import Stats from './components.js/dashboard/stats/stats';
import PaymentDashboard from './components.js/dashboard/components/payment';
import Register from './components.js/dashboard/register';


function App() {
  const user = localStorage.getItem("token");

  return (
      <div>
          <section>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/form' element={<MultiForm/>}/>
            <Route path='/payment' element={<PaymentDashboard />} />
            <Route path='/stats' element={<Stats />} />
            {(<Route path='/dashboard' element={<Dashboard />} />)}
            <Route path='/info/:id' element={<UserInfo />} />
            <Route path='/form-extended' element={<MultiFormExtend/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register/:id' element={<Register/>}/>


            
          </Routes>
          </section>
      </div>
  );
}

export default App;
