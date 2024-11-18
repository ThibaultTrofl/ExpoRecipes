import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {useState} from "react";
import {router} from "expo-router";

export default function HomePage() {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  function handleContinue (){
    if(!name){
      return setError(true);
    }
    return router.replace("/");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Quel est votre nom ?</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
      <Button style={styles.button} title="Continuer" onPress={handleContinue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:5,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 20,
    fontWeight: 400,
  },
  input: {
    width: 200,
    height: 30,
    paddingInline: 5 ,
    paddingHorizontal: 2 ,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    fontWeight: "bold",
  },
  button:{
    // color:'grey',
  }
});
