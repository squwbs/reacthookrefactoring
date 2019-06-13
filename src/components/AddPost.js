import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import {TextInput,View,TouchableOpacity} from "react-native"

const AddPost = () => {
const [state, setState] = useContext(Context);
const[userInput,setUserInput,Refs] = useState("")
//const [userInput, setUserInput] = useState("");
//const [trackTitle, setTrackTitle] = useState("");
//const [posts] =useState("")

// useEffect(() => {
// //     axios
// //       .get(
// //         `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
// //           process.env.REACT_APP_MM_KEY
// //         }`
// //       )
// //       .then(res => {
// //         let track_list = res.data.message.body.track_list;
// //         setState({ track_list: track_list, heading: "Search Results" });
// //       })
// //       .catch(err => console.log(err));
// //   }, [trackTitle]
// // this.refs.addPost.value=""
//     },[state.posts]
// );


    const addTodo = e => {
    e.preventDefault();
    //setTrackTitle(userInput);
    setState({...state,posts:[...state.posts,state.text],text:""})
    console.log(state)
    //console.log(Refs)
    //document.getElementById('addPost').value=''
  
  };


  const onChange = (e) => {
    //e.preventDefault()
    //setUserInput(e.target.value)
    //console.log()
    setState({...state,text:e.target.value})
    //setState({...state,userInput:e.target.value})
  };

  return (
    <View style={{
        margin:1,
        borderColor:'#cfcfcf',
        borderWidth:1,
        flexDirection:'row',
        flex:1,
        
        // shadowColor: 'rgba(1, 1, 1, 1)',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 1,
        //color:'black',
        // textShadowColor: 'rgba(1, 1, 1, 1)',
        // textShadowOffset: {width: 0, height: 0},
        // textShadowRadius: 5
      }}>
      {/* <form onSubmit={addTodo}  style={{
              margin:1,
              borderColor:'#cfcfcf',
              borderWidth:1,
              alignItems:'center',
              flexDirection:'column',
              flex:1,
              
              // shadowColor: 'rgba(1, 1, 1, 1)',
              // shadowOffset: {width: 0, height: 0},
              // shadowRadius: 1,
              color:'black',
              // textShadowColor: 'rgba(1, 1, 1, 1)',
              // textShadowOffset: {width: 0, height: 0},
              // textShadowRadius: 5
            }}> */}
        
          {/* <input
            id="addPost"
            type="text"
            className="form-control form-control-lg"
            placeholder="type todo..."
            name="userInput"
            value={state.text}
            onChange={onChange}
          /> */}
        <TextInput 
            editable = {true}
            maxLength = {40}
            multiline = {true}
            numberOfLines = {1}
            onChangeText={(text) => setState({...state,text:text})}
            value={state.text}
            onChange={onChange}
            
            style={{
              margin:1,
              borderColor:'#cfcfcf',
              borderWidth:1,
              alignItems:'center',
              flexDirection:'row',
              flex:1,
              
              // shadowColor: 'rgba(1, 1, 1, 1)',
              // shadowOffset: {width: 0, height: 0},
              // shadowRadius: 1,
              color:'black',
              // textShadowColor: 'rgba(1, 1, 1, 1)',
              // textShadowOffset: {width: 0, height: 0},
              // textShadowRadius: 5
            }}
          />
        
        {/* <button className="button" type="submit">
          add
        </button> */}
        <TouchableOpacity 
            className="button" 
            type="submit" 
            style={{
                height:22,
                backgroundColor:'#ffffff',
                alignItems:'center',
                justifyContent:'center',
                margin:1,
                borderColor:'#cfcfcf',
                borderWidth:1,
                //shadowColor: 'rgba(1, 1, 1, 1)',
                //shadowOffset: {width: 0, height: 0},
                //shadowRadius: 20
                }}
            onPress={addTodo}>
          <a style={{
              color:'black',
              fontSize:12,
              paddingBottom:2,
              //textShadowColor: 'rgba(1, 1, 1, 1)',
              //textShadowOffset: {width: 0, height: 0},
              //textShadowRadius: 20,
            }}>
                add
            </a>
        </TouchableOpacity>
      {/* </form> */}
    </View>
  );
};

export default AddPost;