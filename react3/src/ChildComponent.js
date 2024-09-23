const ChildComponent = (props) => {
    return <p>Привет, {props.message}! Счетчик: {props.count}</p>;
  };

export default ChildComponent;