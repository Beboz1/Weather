import {status}from "./fetch.js";
import clear from './images/Clear.jpg';
import clouds from './images/Clouds.jpg';
function Status({sharedState}){
    if(status === 'Clear'){
        return(
            <>
            <img src={clear} alt={status}/>
            </>
        )
    }
    else if(status === 'Clouds'){
        return(
            <>
            <img src={clouds} alt={status}/>
            </>
        )
    }
    return(
        <>
        <h1>{status}</h1>
        </>
    )
}
export default Status