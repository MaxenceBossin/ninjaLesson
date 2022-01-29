
import './App.css';

function App() {
  const title  = 'title'
  const like   = 50
  const person = { name : 'maxou'}
  const link   = "http://google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Like : {like} </p>
        {/* test */}
        <p>{10}</p>
        <p>{'string'}</p>
        <p>[1,array,2]</p>
        <p>{Math.random() * 10}</p>
        <p>{person.name}</p>
        <a href={link}>google</a>
        
      </div>
    </div>
  );
}

export default App;
