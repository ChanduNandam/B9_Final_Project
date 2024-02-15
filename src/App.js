import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
      <LoginForm />

    </div>
    
  );
}


export default App;
