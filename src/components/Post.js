import React from 'react';
import {View} from 'react-native'
const Post = props => {
  const { post } = props;
  return (
    <View style={{
                margin:2,
                padding:1,
                height:22,
                backgroundColor:'#ffffff',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                flex:1,
                fontSize:12,
                borderColor:'#cfcfcf',
                borderRadius:2,
                color:'black',
                borderWidth:1,
                textAlign:'center'
                }}>
        <div>
            {post}
        </div>
    </View>
  );
};

export default Post;