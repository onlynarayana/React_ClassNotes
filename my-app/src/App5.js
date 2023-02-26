import { useState } from "react";
import "./App2.css";

function App5() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //   console.log("First Name is : ", { firstName });

  //   const handleFirstName = (event) => {
  //     setFirstName(event.target.value);
  //   };
  //   const handleLastName = (event) => {
  //     setLastName(event.target.value);
  //   };
  //   const handleEmail = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const handleFirstName = (event) => {
  //     setFormDetails({
  //       firstName: event.target.value,
  //       lastName: formDetails.lastName,
  //       email: formDetails.email,
  //     });
  //   };

  //   const handleLastName = (event) => {
  //     setFormDetails({
  //       firstName: formDetails.firstName,
  //       lastName: event.target.value,
  //       email: formDetails.email,
  //     });
  //   };

  //   const handleEmail = (event) => {
  //     setFormDetails({
  //       firstName: formDetails.firstName,
  //       lastName: formDetails.lastName,
  //       email: event.target.value,
  //     });
  //   };

  const handleFormChange = (field, event) => {
    // if (field === "firstName") {
    //   setFormDetails({
    //     firstName: event.target.value,
    //     lastName: formDetails.lastName,
    //     email: formDetails.email,
    //   });
    //   return;
    // }
    // if (field === "lastName") {
    //   setFormDetails({
    //     firstName: formDetails.firstName,
    //     lastName: event.target.value,
    //     email: formDetails.email,
    //   });
    //   return;
    // }
    // if (field === "email") {
    //   setFormDetails({
    //     firstName: formDetails.firstName,
    //     lastName: formDetails.lastName,
    //     email: event.target.value,
    //   });
    // }

    setFormDetails({
      ...formDetails,
      [field]: event.target.value,
    });
  };

  const handleFormChange2 = (event) => {
    setFormDetails({
      ...formDetails,
      [event.target.name]: event.target.value,
    });
  };

  const [value, setValue] = useState({ id: 1, team: "Marvel" });
  console.log("Component Re-rendered");

  const handleClick = () => {
    const newValue = { ...value, team: "DC" }; //Overriding the team
    setValue(newValue);
  };

  return (
    <main>
      {/* <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            onChange={handleFirstName}
            value={formDetails.firstName}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            onChange={handleLastName}
            value={formDetails.lastName}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={handleEmail}
            value={formDetails.email}
          ></input>
        </div>
      </form> */}

      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            onChange={(event) => handleFormChange("firstName", event)}
            value={formDetails.firstName}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            onChange={(event) => handleFormChange("lastName", event)}
            value={formDetails.lastName}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={(event) => handleFormChange("email", event)}
            value={formDetails.email}
          ></input>
        </div>
      </form>

      <form onChange={handleFormChange2}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            // onChange={handleFormChange2}  // event bubblling
            value={formDetails.firstName}
            name="firstName"
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            // onChange={handleFormChange2}  // event bubblling
            value={formDetails.lastName}
            name="lastName"
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            // onChange={handleFormChange2}  // event bubblling
            value={formDetails.email}
            name="email"
          ></input>
        </div>
      </form>
      <div>
        <p>ID : {value.id}</p>
        <p>Team : {value.team}</p>
        <button onClick={handleClick}>Change the Team to DC</button>
      </div>

      <p>{/* user entered : {firstName} {lastName} */}</p>
    </main>
  );
}

export default App5;
