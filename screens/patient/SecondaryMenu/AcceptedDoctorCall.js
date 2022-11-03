import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function AcceptedDoctor({ route }) {
  console.log(route);
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.header}>

    </View>
    <Image style={styles.avatar} source={{ uri: route.params.Doctor.image }} />
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        <Text style={styles.name}>
         Doctor  {route.params.Doctor.firstName} {route.params.Doctor.lastName} will be coming Soon
        </Text>
        <View style={styles.box}>
        <Text style={styles.info}>{route.params.Doctor.email}</Text>
        <Text style={styles.description}>Phone Number : {route.params.Doctor.phoneNumber}</Text>
        
        </View>
      </View>
    </View>
    
  </View>
  </ScrollView>
  );
}
const styles = StyleSheet.create({

  header: {
    backgroundColor: "#077871",
    height: 160,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    justifyContent:"center",
    padding: 30,
    
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    borderBottomWidth: 2,
    borderColor: "#077871",
    textAlign:"center"
  },
  info: {
    fontSize: 20,
    color: "#077871",
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 80,
  },
  loginBtn1: {
    width: "50%",
    borderRadius: 25,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 80,
  },
  loginText: {
    color: "#077871",
  },
  logout: {
left:225
  },
  logout1:{
left:50
  },
  logouticon:{
    left:7
  },
  box:{
    justifyContent:"flex-start",
    borderWidth:2,
    borderColor:"#077871",
    alignItems:"baseline",
    width:330,
    height:200,
    margin:20,
    padding:20,
    borderRadius:20
  }
});
export default AcceptedDoctor;
