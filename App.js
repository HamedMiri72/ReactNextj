import './App.css';

function App() {

  //create variable inside function
  const title = "Welcome to my new website";
  const likes = 50;
  //make object: we can not output this object , so numbers and string an 
  //arrays fine  and boolean and object we cant
  //const person = {name : "Hamed", age : 31};
  const link = "http://google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked { likes }</p>
        {/* <p>{ person }</p> */}
        <p>{ 10 }</p>
        <p>{ "Hello Hamed" } </p>
        <p>{ [1,2,3,4]}</p>
        <p>{ Math.random() * 10 }</p>
        {/* <a href="http://ww.googlr.com"> Google website</a> */}
        <a href={link}>Google Website</a>
      </div>
    </div>
  );
}

export default App;
