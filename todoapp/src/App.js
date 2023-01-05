import logo from './logo.svg';
import './App.css';
import './index.css'
import { DatePicker } from 'antd';

function App() {
  return (
    <div className="h-72 flex justify-center items-center border-4 bg-slate-200 min-h-screen" >
      <DatePicker />
    </div>
  );
}

export default App;
