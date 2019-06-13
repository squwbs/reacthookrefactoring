import React,{Component,Context,useContext} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import {FlatList} from 'react'
import {ContextController} from './context'

class App extends Component {
  render(){
    return(
      <ContextController>
        <Posts/>
        <AddPost/>
      </ContextController>
    )
  }
}

const appStyle = {
  flex:1,
  margin:0,
  borderColor:'#000000',
  //borderWidth:5,
  // shadowColor: 'rgba(1, 1, 1, 1)',
  // shadowOffset: {width: 0, height: 0},
  // shadowRadius: 20,
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'space-evenly',
  height:22,
};
export default App;
