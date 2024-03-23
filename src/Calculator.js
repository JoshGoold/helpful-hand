import React, {useState} from "react";

function Calculator(props){

    const [result, setResult] = useState("");

    const handleButtonClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const handleEqual = () => {
        try {
            setResult(eval(result).toString())
        } catch (error){
            setResult("Error")
        }
    }
    const handleClear = () =>{
        setResult("");
    }

    const bracket = "(";
    const bracket2 = ")";
    
    return(
        <>
        {props.showCalculator && (
        <div className="calculator intro">
            <div className="inputScreen">
                <div className="result">{result}</div>
                </div>
                <div className="buttons">
                    <table>
                        <tr>
                            <td> <button onClick={handleClear} name="C">C</button></td>
                            <td> <button onClick={handleButtonClick} name="(">{bracket}</button></td>
                            <td> <button onClick={handleButtonClick} name=")">{bracket2}</button></td>
                            <td> <button onClick={handleButtonClick} name="/">/</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={handleButtonClick} name="7">7</button></td>
                            <td> <button onClick={handleButtonClick} name="9">9</button></td>
                            <td> <button onClick={handleButtonClick} name="8">8</button></td>
                            <td> <button onClick={handleButtonClick} name="*">*</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={handleButtonClick} name="4">4</button></td>
                            <td> <button onClick={handleButtonClick} name="5">5</button></td>
                            <td> <button onClick={handleButtonClick} name="6">6</button></td>
                            <td> <button onClick={handleButtonClick} name="-">-</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={handleButtonClick} name="3">3</button></td>
                            <td> <button onClick={handleButtonClick} name="2">2</button></td>
                            <td> <button onClick={handleButtonClick} name="1">1</button></td>
                            <td> <button onClick={handleButtonClick} name="+">+</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={handleButtonClick} name="0">0</button></td>
                            <td> <button onClick={handleButtonClick} name=".">.</button></td>
                            <td> <button onClick={handleButtonClick} name="%">%</button></td>
                            <td> <button onClick={handleEqual} name="=">=</button></td>
                        </tr>
                   </table>
                    </div>    

        </div>
        )}
        </>
    );
}
export default Calculator