import logo from './logo.svg';
import './App.css';

function App() {
  const [ip, setIp] = useState(null);


  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(
        data => setIp(data.ip)
      )
      .catch(error => console.error(error));
  }, []);

  console.log("ip :",ip); 

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with HyperActive
        </a>
      </header>
    </div>
  );
}

export default App;
