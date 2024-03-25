import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import styleApp from './App.module.css'

import MapPage from '../pages/map/MapPage';
import AnalyticsPage from '../pages/analytics/AnalyticsPage'
import StartPage from '../pages/start/StartPage'
import CreateUserPage from '../pages/create-user/CreateUserPage'
import CreateAdminPage from '../pages/create-admin/CreateAdminPage'
import UpdateAdminPage from '../pages/update-admin/UpdateAdminPage'

function App() {
  return (
    <div className={styleApp.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main/" element={<Layout />}>
            <Route path='map' element={<MapPage />} />
            <Route path='analytics' element={<AnalyticsPage />}/>
            <Route path='create-user' element={<CreateUserPage />}/>
            <Route path='create-admin' element={<CreateAdminPage />}/>
            <Route path='update-admin' element={<UpdateAdminPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

