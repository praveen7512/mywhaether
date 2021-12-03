import React from 'react';
import "./form.style.css";


const Form =(props)=>{

return (
    <div className="container">
       <form onSubmit={props.loadWeather}>
     <div className="row">
            <div className="col-md-3 offset-md-2">
                <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off" />
            </div>
            <div className="col-md-3">
                <input type="text" placeholder="Country" className="form-control" name="country" autoComplete="off" />
            </div>
            <div className="col-md-3 mt-md-0 text-md-left">
                <button className="btn btn-warning">Get Weather</button>
            </div>
        </div>
       </form>
    </div>
);



}

export default Form;






