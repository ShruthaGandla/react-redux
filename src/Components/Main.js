//Since this is a dumb component we dont need class extends and we can just make a const function 
//and export it.It simply returns an html ,no need to render.
import React from "react";

export const  Main =(props) => {
   
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {/* no more need this keyword as we have props passed as function argument */}
                        <button
                            className="btn btn-primary"
                            
                            onClick={() => props.changeUsername()}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
}
