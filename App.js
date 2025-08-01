import './App.css';
import React , {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";
const App =()=>{
   const Apikey=process.env.REACT_APP_API;
 const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
      />
          <Routes>
            <Route exact path="/home" element={<News setProgress={setProgress} Apikey={Apikey}  pagesize={10} key={"general"} country="us" category="general" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} key={"general"} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} key={"business"} country="us" category="business" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} key={"science"}country="us" category="science" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} key={"health"} country="us" category="health" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} key={"technology"} country="us" category="technology" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} country="us" key={"sports"} category="sports" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} Apikey={Apikey} pagesize={10} country="us" key={"entertainment"} category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;
