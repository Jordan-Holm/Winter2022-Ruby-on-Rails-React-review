import { Routes, Route } from 'react-router-dom';
import Players from './components/players/Players';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Players />} />
    </Routes>
  </>
)

export default App;
