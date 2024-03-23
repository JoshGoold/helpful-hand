
function Footer(props){
    const style ={
        float: "right",
    }

    return(
        <>
        <hr className="fadeIn"></hr>
        <div className="footer slideInLeft">
            <button onClick={props.function}>Review</button>
            <span>Helpful Hand &copy;</span>
            <button className="intice" onClick={props.function2}>Twitter</button>
        </div>
        <br></br>
        <br></br>
        <p className="fadeIn">Total Reviews: {props.reviewTotal} <button style={style} onClick={props.reviewFunction}>View Reviews</button></p>
        <ol>
        {props.reviewState && (
            props.reviewArray.map((r, index)=>
            <li key={index}>
                {r}
                <button  onClick={props.close}>Close</button>
            </li>)
        )}
        </ol>
        </>
    );
}
export default Footer