
//Since this is a dumb component we dont need class extends and we can just make a const function 
//and export it.It simply returns an html ,no need to render
import React from "react";

export const User = (props) => {
    
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name: {props.username}</p>
                    </div>
                </div>
            </div>
        );
};


