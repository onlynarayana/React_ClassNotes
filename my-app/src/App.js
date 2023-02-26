// import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Aaran";
  const score = [1, 2, 3, 4];

  function greet() {
    return <h1>Hello Sir,</h1>;
  }

  const user = {
    name: "Narayan",
    greeting() {
      return `hello there I am ${name}`;
    },
  };

  const tagName = <h3>OnlyNarayana</h3>;
  const age = <h1>22</h1>;

  const multipleTags = (
    <div>
      <p>one </p>
      <p>two</p>
      <p>three</p>
      <p>four</p>
    </div>
  );

  const callfunc = () => {
    return <h3>new tag genrated</h3>;
  };

  const todos = ["Gyming", "Coding", "Studying"];
  const settodos = todos.map((todo) => <p>{todo}</p>);

  const movies = [
    { id: 1, name: "Iron-man", ratting: 9 },
    { id: 2, name: "Spider-man", ratting: 7 },
    { id: 3, name: "Mucury-man", ratting: 6 },
    { id: 4, name: "Bat-man", ratting: 7 },
  ];
  const moviesArray = movies.map((movie) => (
    <h2>
      {movie.id}. {movie.name}
    </h2>
  ));

  const moviesArr = movies
    .filter((movie) => movie.ratting >= 7)
    .map((movie) => (
      <h2>
        {movie.id}. {movie.name}
      </h2>
    ));

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <h1>
        <Header />
      </h1>
      <h1>Hello! i am {name}.</h1>
      <b>i am learning React</b>
      <h2>the current score is {score[1]}</h2>
      <h2>the total score is {score.pop()}</h2>
      <hr />
      {greet()}
      <h1>{greet()}</h1>
      <hr />
      <div>
        <h1>{user.name}</h1>
        <h4>
          {user.greeting()} {greet()}
        </h4>
      </div>
      <hr />
      {tagName}
      {age}
      <hr />
      {multipleTags}
      {callfunc()}
      {settodos}
      <hr />
      {moviesArray} <hr />
      {moviesArr}
    </>
  );
}

function Header() {
  return <header>This is the Heading</header>;
}

export default App;
