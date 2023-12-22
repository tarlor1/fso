const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = ["Peter", "Maya"];

  return (
    <div>
      <p>{friends}</p>
      <p>{friends[1]}</p>
    </div>
  );
};

export default App;
