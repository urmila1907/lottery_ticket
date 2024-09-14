import "./LottoBall.css";

function LottoBall({ballNum}){
    return(
        <>
        <div className="ball">
           <p className="num">
           {ballNum}
            </p> 
        </div>
        </>
    )
}

export default LottoBall;