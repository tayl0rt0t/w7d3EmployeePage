import HomePage from './pages/HomePage';
import './App.css';
import EmployeePage from './pages/EmployeePage';
function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', flexdirection:'row', alignContent:'center', fontFamily:'monospace'}} className='App'>
      <div style={{display:'flex', justifyContent:'center', marginTop:'200px'}}>
        <HomePage />
      </div>
      <div style={{display:'flex', justifyContent:'center', marginTop:'200px'}}>
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;