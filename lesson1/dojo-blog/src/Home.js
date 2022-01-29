const Home = () => {

  const handleClick = (e) => console.log('hello ninjas', e)  
  const handleClickAgain = (name, e) => console.log('clicked again :   ' + name+ ' ',e.target)
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me !</button>
        <button onClick={(e) => handleClickAgain('max', e) }>Click Me !</button>
      </div>
    );
  }

  export default Home;