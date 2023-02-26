import "./App3.css";

// const User = (props) => {
//   //   console.log("props ->", props);
//   return (
//     <div className="users">
//       <h3>{props.name}</h3>
//       <h3>{props.designation}</h3>
//       <h3>{props.age}</h3>
//     </div>
//   );
// };

// function Item(props) {
//   const { name, isPacked } = props;
//   //   if (isPacked) {
//   //     return <li>{name} ✅</li>;
//   //   }
//   //   return <li>{name} ❌</li>;

//   //   return <li>{isPacked ? `${name} ✅` : `${name} ❌`}</li>;

//   return (
//     <li>
//       {name} {isPacked ? "✅" : "❌"}
//     </li>
//   );
// }

//children props :-

// const Button = ({ children }) => {
//   return <button className="btn">{children}</button>;
// };

const Button = ({ title }) => {
  return <button className="btn">{title}</button>;
};

const Link = ({ children }) => {
  return (
    <a className="link" href="https://www.amazon.in">
      {children}
    </a>
  );
};

// const Box = ({ children }) => {
//   return (
//     <section>
//       <p>Section is below</p>
//       {children}
//     </section>
//   );
// };

const Box = ({ renderThis }) => {
  return (
    <section>
      <p>Section is below</p>
      {renderThis}
    </section>
  );
};

function App3() {
  const handleClick = () => {
    console.log("button is clicked");
  };

  const handleClick1 = (name) => {
    console.log("button is clicked", name);
  };
  const handleClick2 = (event) => {
    console.log("button is clicked", event.target.name); //event.target.innerHTML
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const handleBlurr = (event) => {
    console.log("OnBlurr is called");
  };

  const users = [
    { id: 1, firstName: "Shradha", lastName: "Kapoor" },
    { id: 2, firstName: "Alia", lastName: "Bhatt" },
    { id: 3, firstName: "Tammana", lastName: "Bhatia" },
  ];

  const isSuccess = true;
  const isBig = true;
  const isWhite = true;

  return (
    <main>
      {/* <User name="Narayan" designation="Software developer" />
      <User name="Vikas" designation="System developer" />
      <User age={24} />
      <hr />
      <div>
        <h2>My Packing List</h2>
        <ul>
          <Item name="Cloths" isPacked={true} />
          <Item name="Essentials" isPacked={true} />
          <Item name="Shyaapi" isPacked={false} />
        </ul>
      </div> */}
      <hr />
      <h1>Event Handling</h1>
      <button onClick={handleClick}>click me</button>
      <button
        onClick={() => {
          handleClick1("Aaran");
        }}
      >
        Aaran
      </button>
      <button onClick={handleClick2} name="Narayan">
        Narayan
      </button>
      <hr />
      <input type="text" onChange={handleChange} onBlur={handleBlurr} />
      <hr />
      <div>
        {users.map((user) => {
          return <p key={user.id}>{`${user.firstName}  ${user.lastName}`}</p>;
        })}
        {/* <Button>Increment</Button>
        <Button>Decrement</Button> */}
        <Link>amazon</Link>
        <hr />
        <Button title="click me" />
      </div>
      <hr />
      {/* <Box>
        <Button>Increment</Button>
        <Button>Decrement</Button>
        <Link>amazon</Link>
        <Button title="click me" />
      </Box> */}
      <Box
        renderThis={
          <>
            {/* <Button>Increment</Button>
        <Button>Decrement</Button> */}
            <Link>amazon</Link>
            <Button title="click me" />
          </>
        }
      />
      const renderThis ={" "}
      {
        <div>
          <p>one</p>
          <p>two</p>
          <p>three</p>
        </div>
      }
      <hr />
      <div
        className={`
        ${isSuccess && "success"}
        ${isBig && "big"}
        ${isWhite && "white"}
      `}
      >
        Container
      </div>
      <div
        style={{
          backgroundColor: "violet",
          fontSize: "2rem",
          color: isSuccess ? "yellow" : "white",
        }}
      >
        Container
      </div>
    </main>
  );
}

export default App3;
