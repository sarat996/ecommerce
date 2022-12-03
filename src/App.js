import './App.css';
import DispCard from './components/DispCard';
import {Data} from './data/Data';
function App() {
  return (
    <>
    <div>
    {Data.map((item) =>
    <DispCard title={item.title} desc={item.desc} category={item.category} cost={item.cost} imglink={item.imglink}/>
    )}
    </div>
    </>

  );
}

export default App;
