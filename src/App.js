
import './App.css';
import useWindowSize from './Hooks/useWindowSize';
import ApplicationRoutes from './routes';
function App() {
const windowSize = useWindowSize()
console.log('windowSize',windowSize);
  return (
   <ApplicationRoutes/>
  );
}

export default App;
