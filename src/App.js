import Todolist from '../../helpful-hand/src/Todolist'
import React, {useState} from 'react'
import Footer from './Footer';
import Calculator from './Calculator';
function App() {
  
  const [lists, newList] = useState([]);
  const [visible, setVisible] = useState(true);
  const [number, setNumber] = useState(1)
  const [color, setColor] = useState("")
  const [totalReview, setTotalReview] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [reviewState, setReviewState] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  function handleColor(e){
    setColor(e.target.value)
    
  }
  function handleReviewClose(){
    setReviewState(false)
  }

  function handleCreate(){
    const newTitle = prompt("Enter a title");
    setNumber(n => n + 1)
    const currentColor = color;
    newList((prevLists)=>[...prevLists, <Todolist title={newTitle} number={number} color={currentColor}/>])
    setVisible(false);
  }
  function deleteList (index) {
    const updatedLists = lists.filter((_,i)=> i !== index);
    newList(updatedLists)
    if (updatedLists.length === 0){
      setVisible(true)
    }
}
  function handleReview(){
    const review = prompt("Enter your review here!")
    if (review === ""){
      alert("Please submit a real review.")
    } else{
      alert("Success, we appreciate your honesty.")
      setTotalReview((r) => r + 1);
      setNewReview(review)
      setReviews((r)=>[...r, review]);
    }
    
  }
  function handleCalculator(){
    setShowCalculator(true)
    if (showCalculator === true){
      setShowCalculator(false)
    }
  }
  function handleViewReview(){
    setReviewState(true);
  }
  function handleTwitter(){
    alert("hahaha we dont have a twitter. GET PRANKED!")
  }
  
  return (
    
    <div>
      <h1 className="slideInLeft">Task List <input title="Choose Task Color" type='color' onChange={handleColor}></input><button onClick={handleCalculator}>Calculator</button><button onClick={handleCreate}>Create Task List</button></h1>
      {visible && (<div className='default fadeIn'>
        <p>You currently have no lists. </p>
        <p className="rotate clock">🕒</p>
      </div>)}
      <ol  className='main-ol'>
      {lists.map((list, index)=>
      <li  key={index}>
        <span>{list}</span>
        <button onClick={() => deleteList(index)}>❌</button>
        <br></br>
      </li>
      )}
      </ol>
       <Calculator showCalculator={showCalculator}/>
     
      <Footer close={handleReviewClose} reviewState={reviewState} reviewFunction={handleViewReview} function={handleReview} function2={handleTwitter} reviewTotal={totalReview} reviewArray={reviews}/>
    </div> 
  );
}

export default App;
