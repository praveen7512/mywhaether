import React from 'react';


const Wheather = (props) => {

    return (

        <div className="container text-light">
            <div className="cards pt-4">
            {props.city?<h1>
                  {props.city} , {props.country}
                </h1>:null}
                
                <h5 className="py_4">
                    <i className={`wi ${props.icon} display-1`}></i>
                </h5>

                 {props.celsius?<h1 className="py-2">{props.celsius}&deg;</h1>:null}   
                <h3>
                   
                    {props.temp_min? <span className="px-4">{props.temp_min}&deg;</span>:null} 
                   
                    {props.temp_max? <span className="px-4">{props.temp_max}&deg;</span>:null} 
                   
                </h3>
                <h4 className="py-3"> {props.description}</h4>
            </div>
        </div>

    );

};

// function minmax (min ,max) {
//     return (

//     );
// }


export default Wheather;