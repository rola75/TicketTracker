import { useState } from "react";
import "./Counter.scss";


const Counter = () => { 
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    
    const handleDecrease = () => {
        if(counter === 0) {
            return
        }else{
        setCounter(counter - 1);
        }
    }

    return (
        <div className="counter">
            <div className="counter__title">  
                <p>Counter</p>
            </div>
             <div className="counter__buttons">
                <button className="counter__buttons__decrease" onClick={handleDecrease}>-</button>
                <p className="counter__buttons__number">{counter}</p>
                <button className="counter__buttons__increase" onClick={handleIncrease}>+</button>
            </div>
        </div>
    );
};

export default Counter;