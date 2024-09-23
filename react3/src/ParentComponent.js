import React, {useState} from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

let string = "Вася";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((count) => count + 1);
      };

      const reset = () => {
        setCount(count => count = 0);
      };

      const random = () => {
        setCount(count => count = Math.floor(Math.random()*10) + 1 );
      };

      const decrement = () => {
        setCount((count) =>  {
          if (count > 0) {
            count--;
          }
          return count;
        });
      }
    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>Увеличить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={random}>Случайное значение</button>
            <button onClick={decrement}>Уменьшить</button>
            <ChildComponent message={string} count={count}></ChildComponent>
           <SiblingComponent></SiblingComponent>
        </div>
    )
};



export default ParentComponent;