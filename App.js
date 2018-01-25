/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { Image, View } from 'react-native';
 import { Container, Header,Left,Body,Title,Right, Content, Item, Input,Button,Text } from 'native-base';
 export default class RoundedTextboxExample extends Component {
   render() {
     return (
       <Container>
       <Header style={{backgroundColor:'black'}}>
           <Left />

           <Body>
             <Title style={{color: 'deepskyblue'}}>Watson</Title>
           </Body>
           <Right />
         </Header>
         <Content>
         <View style={{flexDirection: 'row'}}>
              <View style={{flex : 0.78}}>
           <Item style={{backgroundColor: 'lightgrey',marginLeft:6,marginTop:500}} rounded>
             <Input placeholder='Type'/>
           </Item>
           </View>
             <View style={{flex : 0.22, marginLeft:2,marginTop:500}}>
           <Button rounded>
           <Text>Send</Text>
         </Button>
         </View>
         </View>
         </Content>
       </Container>
     );
   }
 }
 //
 // <input type="text" id="input_text" >
	//     <button type="button" onclick="
	//     	var text = document.getElementById('input_text').value;
	//         var request = new XMLHttpRequest();
	//         request.onreadystatechange=function(){
	//             if(request.readyState==4){
	//                 if(request.status==200)
	//                     document.getElementById('resp').innerHTML='watson says:- '+request.responseText;
	//                 else
	//                     alert('something went wrong');
	//             }
 //
	//         };
	//         request.open('POST','/send', true);
	//         request.setRequestHeader('Content-Type','application/json');
	//         request.send(JSON.stringify({text:text}));
	//     ">submit</button>
	//     <div id='resp'>watson says:- Hi. It looks like a nice drive today. What would you like me to do?</div>
 //  var req=new XMLHttpRequest();
 //     req.onreadystatechange=(e)=>
 //     {
 //         if(req.status==200 && req.readyState==4)
 //         {
 //             alert(req.responseText);
 //         }
 //     }
 //     req.open("GET","http://localhost:3000/show_react");
 //     req.send();
 // }
