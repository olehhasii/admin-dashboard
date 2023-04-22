import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './routes/Layout';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/test" element={<div>hi</div>} />
      </Route>
    </Routes>
  );
};

export default App;
