import React from 'react';
import './App.css';


class App extends React.Component{
  const




  render(){

    return(
      <div className="container">

        <div id="task-container">
          <div id="form-wrapper">
            <div id="form">
              <div className="flex-wrapper">
                <div style={{flex:6}}>
                  <input className="form-control" id="title" type="text" placeholder="Add Task"/>

                </div>
                <div style={{flex:1}}>
                  <input id="submit" className="btn btn-warning" id="title" type="submit" name="Add" />

                </div>
              </div>
            </div>

          </div>
          <div id="list-wrapper">

          </div>
        </div>
      </div>
    )

  }

}




export default App;
