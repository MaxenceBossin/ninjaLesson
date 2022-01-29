import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title  = 'title'
  const like   = 50
  const person = { name : 'maxou'}
  const link   = "http://google.com"
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
