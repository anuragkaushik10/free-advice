import BasicCard from "./component/BasicCard";
import React from "react";
import Header from "./component/Header";
import "./index.css";
export default function App() {
  const [advice, setAdvice] = React.useState([]);
  const [person, setPerson] = React.useState([]);
  const [clicked, setClicked] = React.useState([]);

  function callAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAdvice(json.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(advice);
  }

  function callPerson() {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPerson(json.results[0].picture.large);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(person);
  }

  React.useEffect(() => {
    callAdvice();
    callPerson();
    // getNext();
  }, [clicked]);

  function getNext() {
    setClicked(!clicked);
    // setClicked(false);
  }
  return (
    <div>
      <Header />
      <BasicCard advice={advice} image={person} />
      <button onClick={getNext}>Next</button>
    </div>
  );
}
