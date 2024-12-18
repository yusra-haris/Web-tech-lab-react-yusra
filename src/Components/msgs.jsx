import React from 'react'; 
import './msgsstyling.css';

function MsgsInfo ( {msgs} ){
    return(
<div className='container' >
        <div className='msgdetails'>
            <p> Current Performace Update : 
            <br/> {msgs.msg1} </p>
            <p className='warning'> Warning : 
                <br/> {msgs.msg2} </p>
            <p> Goal :
                <br/> {msgs.msg3} </p>


        </div>
        </div>
    )


}
export default MsgsInfo;