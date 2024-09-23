import React, {useState} from "react";

const SiblingComponent = () => {
    const [text, setText] = useState("!!!!!!!!!!!!!!!");
    const newText = () => {
        setText((text) => text = "REDEV");
      };

      return (
   <>
   <p>{text}</p>
   <button onClick={newText}>Изменить текст</button>
   </>
  
    )
        

      
}

export default SiblingComponent;