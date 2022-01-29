import { useState } from 'react'

const Home = () => {
  // USESTATE
  const [name, setName] = useState('Maxime')
  let [age, setAge] = useState(20)
  const handleClick = (e) => console.log('hello ninjas', e)  
  const handleClickAgain = (name, e) => console.log('clicked again :   ' + name+ ' ',e.target)
  const handleClickName  = () => setName('Maxence')
  const handleClickAddAge  = () => setAge(age++)


    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={handleClick}>Click Me !</button>
        <button onClick={(e) => handleClickAgain('max', e) }>Click Me !</button>
        <button onClick={handleClickName}>Corige name !</button>
        <button onClick={handleClickAddAge}>Change age !</button>
      </div>
    );
  }

  export default Home;