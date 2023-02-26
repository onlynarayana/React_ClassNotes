
import { combineReducers, createStore } from "redux";

console.clear();

// Redux actions MUST be an object
// Redux actions MUST have a type property
// payload IS NOT MANDATORY

// Action creator -> a function that creates an action

// Action Creator
const createPolicy = (name, amount) => {
  //  Action (object)
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

/*
  {
    type: "CREATE_POLICY",
    payload: {
      name: 'Aditya',
      amount: 100
    }
  }
*/

// Action Creator
const deletePolicy = (name) => {
  // Action (object)
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

/*
  {
    type: "DELETE_POLICY",
    payload: {
      name: 'Aditya'
    }
  }

*/

// Action Creator
const createClaim = (name, amountOfMoneyToCollect) => {
  // Action (object)
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect
    }
  };
};

/*
{
  type: "CREATE_CLAIM",
    payload: {
      name: 'Aditya',
      amountOfMoneyToCollect: 50
    }
}

*/

// Reducers
// A function that takes two arguments
// state and action
// Returns a state (new or old - depends on the action)

/* { type: "CREATE_CLAIM", payload: { name: "Aditya", amountOfMoneyToCollect: 50 } } */
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // We care about this action (form)
    const newState = [...oldListOfClaims, action.payload.name]; // ['Aditya']
    return newState;
  }

  // We don't care about this action.type
  return oldListOfClaims;
};

/* { type: "CREATE_CLAIM", payload: { name: "Aditya", amountOfMoneyToCollect: 50 } } */
const accounting = (bagOfMoney = 100, action) => {
  switch (action.type) {
    case "CREATE_CLAIM":
      return bagOfMoney - action.payload.amountOfMoneyToCollect; // 400 - 50 -> 350
    case "CREATE_POLICY":
      return bagOfMoney + action.payload.amount;
    default:
      return bagOfMoney;
  }
};

/* { type: "CREATE_CLAIM", payload: { name: "Aditya", amountOfMoneyToCollect: 50 } } */
const policies = (listOfPolicies = [], action) => {
  switch (action.type) {
    case "CREATE_POLICY":
      const newListOfPolicies = [...listOfPolicies, action.payload.name]; // ["Aditya", "Alex"]
      return newListOfPolicies;
    case "DELETE_POLICY":
      return listOfPolicies.filter((name) => name !== action.payload.name);
    default:
      return listOfPolicies;
  }
};

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

// Dispatching actions!

store.dispatch(createPolicy("Aditya", 100));
store.dispatch(createPolicy("Alex", 200));
store.dispatch(createClaim("Aditya", 50));

console.log(JSON.stringify(store.getState(), null, 2));

/* { type: "CREATE_CLAIM", payload: { name: "Aditya", amountOfMoneyToCollect: 50 } } */

/*
----- STORE -----
{
  accounting: 350,
  claimsHistory: ['Aditya'],
  policies: ["Aditya", "Alex"],
}
----- STORE -----
*/


//// Portal Code  :  -

import "./styles.css";
import { useState } from "react";
import ReactDOM from "react-dom";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "#810CA8",
  padding: 10
};

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#FFF",
  padding: 50,
  zIndex: 1000
};

const OVERLAY_STYLES = {
  position: "fixed",
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.7)",
  zIndex: 1000
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={{ marginBottom: 10 }}>
          <button onClick={onClose}>Close Modal </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal </button>{" "}
        <Modal onClose={() => setIsOpen(false)} open={isOpen}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content </div>
    </>
  );
}

