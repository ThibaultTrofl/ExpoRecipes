import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {useState} from "react";
import {router} from "expo-router";
import {useStore} from "zustand/react";
import {useBoardingStore} from "../stores/boardingStore";

export default function OnboardingPage() {

  const [error, setError] = useState<boolean>(false);
  const { user ,setUser} = useBoardingStore();

  function handleContinue (){
    if(!user){
      return setError(true);
    }
    return router.replace("/recipes");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Quel est votre nom ?</Text>
      <TextInput style={styles.input} value={user} onChangeText={setUser}></TextInput>
      {error &&  <Text style={styles.error} >Veuillez rentrer un nom.</Text>}
      <Button  title="Continuer" onPress={handleContinue}/>
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
  },error:{
    color:'red',
    fontSize: 16,
  }
});
