import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './routes/Layout';
import Home from './routes/Home';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<div>hi</div>} />
      </Route>
    </Routes>
  );
};

export default App;
