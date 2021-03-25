import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul>
          <ul className="header-name">
            <li>GuitarSrc</li>
          </ul>
          <ul className="header-language">
            <li>SITE LANGUAGE:ENGLISH</li>
          </ul>

          <li>
            <img className="arrow" src="down.png" />
          </li>
        </ul>
      </header>
      <div>
        <h3>Learn a Guitar for free.</h3>
        <button>GET STARTED</button>
        <button>I ALREADY HAVE AN ACCOUNT</button>
      </div>
      <div>
        <h3>The best and easy way to learn an Instrument.</h3>
        <p>
          If you dont know how to play an instrument then no need to worry. We
          are here to teach you from basic to advance. You are just one click
          away from becoming the good player.
        </p>
      </div>
    </div>
  );
}

export default App;
