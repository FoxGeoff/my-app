const person = (props) => {
  return (
    <div>
      <p>
        {" "}
        I'm a Person Name: {props.name} and Age: {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
