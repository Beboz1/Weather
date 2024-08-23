import {status}from "./fetch.js";
import clear from './images/Clear.jpg';
import clouds from './images/Clouds.jpg';
import thunder from './images/Thunder.jpg';
import mist from './images/Mist.jpg';
import rain from './images/Rain.jpg';
function Status({sharedState}){
    //*Check the weather and return an image that describes it
    if(status === 'Clear'){
        return(
            <div className="status">
            <img src={clear} alt={status}/>
            <h3>{status}</h3>
            </div>
        )
    }
    else if(status === 'Clouds'){
        return(
            <div className="status">
            <img src={clouds} alt={status}/>
            <h3>{status}</h3>
            </div>
        )
    }
    else if(status === 'Thunderstorm'){
        return(
            <div className="status">
            <img src={thunder} alt={status}/>
            <h3>{status}</h3>
            </div>
        )
    }
    else if(status === 'Mist'){
        return(
            <div className="status">
            <img src={mist} alt={status}/>
            <h3>{status}</h3>
            </div>
        )
    }
    else if(status === 'Rain'){
        return(
            <div className="status">
            <img src={rain} alt={status}/>
            <h3>{status}</h3>
            </div>
        )
    }
    //default retrun if no weather was found it return the weather status
    return(
        <div className="status">
        <h1>{status}</h1>
        </div>
    )
}
export default Status