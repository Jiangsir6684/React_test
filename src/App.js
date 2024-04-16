import {React,Fragment} from "react";

function App() {
  return (
    // 不能在最外层加div 切需要并列的div时 加Fragment 
    <Fragment>
    <div className="App">
      <h1>This is React</h1>
    </div>
    <div className="AppOther">
      <h1>This is React other</h1>
    </div>
    </Fragment>
  );
}

export default App;
