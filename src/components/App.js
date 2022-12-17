import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render = () => {


        return (
            < div id="main" >
                {/* Do not remove the main div */
                    <ol key="relativeList" >
                        <li key="relativeListItem1">Prashu</li>
                        <li key="relativeListItem2">Manoj</li>
                        <li key="relativeListItem3">Rahul</li>
                    </ol >
                }
            </div>
        )
    }
}


export default App;
