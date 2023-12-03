import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apikey="e1ebfe10765e450aa007d58e87df5da1";
  state = {
    progress: 0,

  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }



  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />


          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apikey ={this.apikey} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path="/business" element={<News setProgress={this.setProgress} apikey ={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey ={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route path="/health" element={<News setProgress={this.setProgress} apikey ={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route path="/science" element={<News setProgress={this.setProgress} apikey ={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route path="/sports" element={<News setProgress={this.setProgress} apikey ={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route path="/technology" element={<News setProgress={this.setProgress} apikey ={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
// <News setProgress={this.setProgress} apikey ={this.apikey} pageSize ={this.pageSize} country="in" category ="sports"/>




{/* <Switch>
          <Route  path="/" ><News setProgress={this.setProgress} apikey ={this.apikey} key ="general" pageSize ={this.pageSize} country="in" category ="general"/></Route>
          <Route  path="/business"><News setProgress={this.setProgress} apikey ={this.apikey} key ="business" pageSize ={this.pageSize} country="in" category ="business"/></Route>
          <Route  path="/entertainment" ><News setProgress={this.setProgress} apikey ={this.apikey} key ="entertainment" pageSize ={this.pageSize} country="in" category ="entertainment"/></Route>
          <Route  path="/health" ><News setProgress={this.setProgress} apikey ={this.apikey} key ="health" pageSize ={this.pageSize} country="in" category ="health"/></Route>
          <Route  path="/science"><News setProgress={this.setProgress} apikey ={this.apikey} key ="science" pageSize ={this.pageSize} country="in" category ="science"/></Route>
          <Route  path="/sports" ><News setProgress={this.setProgress} apikey ={this.apikey} key ="sports" pageSize ={this.pageSize} country="in" category ="sports"/></Route>
          <Route  path="/technology" ><News setProgress={this.setProgress} apikey ={this.apikey} key ="technology" pageSize ={this.pageSize} country="in" category ="technology"/></Route>
        </Switch> */}