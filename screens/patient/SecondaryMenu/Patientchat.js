import axios from "axios";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  List,
  TextInput,
  ListItem,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import io from "socket.io-client";
import link from "../../../Adress";
function Chat() {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom]=useState("")

  const socket = io.connect("http://192.168.79.118:3001");
  
  useEffect(() => {
    const characters =
        "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let RoomNumber = "";
      for (let i = 0; i <= 14; i++) {
        RoomNumber +=
          characters[Math.floor(Math.random() * characters.length)];
      }
    setRoom(RoomNumber)
  }, []);
  socket.emit("join_room", room);
  socket.on("Patient_message", (message) => {
    // console.log(message);
    setMessages([...messages, {message}]);
  });
  console.log(messages);

  const sendMessage = () => {
    socket.emit("patient_send_message", { Patient:chat , room});
    setMessages([...messages, {chat}]);
    setChat("");
  };


  return (
   
      <View style={styles.container}>
        <View>
          <View style={styles.container1}>
            <View style={styles.containerForMessage}>
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                console.log("Patient log el item",item);
                return (
                  item.chat?
                  <View style={styles.messages}>
                    <Text style={styles.messagetext}> {item.chat} </Text>
                  </View>
                  :
                  <View style={styles.DoctorMessages}>
                    <Text style={styles.messagetext}> {item.message.Doctor} </Text>
                  </View>
                )
                
              
              }}
            />
            </View>
            <View style={styles.inputView}>
              <TextInput
                styles={styles.TextInput}
                onChangeText={(e) => {
                  setChat(e);
                }}
                value={chat}
                placeholder="Write your message here"
                placeholderTextColor="black"
              ></TextInput>
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => sendMessage()}
            >
              <Text style={styles.loginText}>Send</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "flex-start",
    justifyContent: "center",
    left:13,
    right:13
  },
  loginBtn: {
    width: "94%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize:18
  },
  areaView: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: "90%",
    height: 200,
    marginBottom: 50,
    alignItems: "center",
    borderColor: "#077871",
    borderWidth: 2,
    marginTop: 50,
    multiline: true,
  },

  TextInput: {
    height: "100%",
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  Title1: {
    fontSize: 50,
    padding: 10,
    color: "#077871",
  },
  inputView:{
    borderWidth:2,
    borderColor:"#077871",
    width:"94%",
    height:70,
    borderRadius:50,
    textAlign:"center",
    alignItems:"center"
  },
  messages:{
    borderWidth:3,
    borderColor:"#077871",
    borderRadius:20,
    margin:7,
    backgroundColor:"#6CA86B",
    marginRight:22

  },
  messagetext:{
    padding:10,
    color:"#ffffff",
    fontSize:18
  },
  DoctorMessages:{
    borderWidth:3,
    borderColor:"#077871",
    borderRadius:20,
    margin:7,
    backgroundColor:"#44b3cc",
    marginRight:22

  },
  
  containerForMessage:{
    width:350,
    height:400
  }
});
export default Chat;
