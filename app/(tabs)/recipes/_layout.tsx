import {Tabs, Redirect, Stack} from "expo-router";
import {useBoardingStore} from "../../../stores/boardingStore";



const TabsLayout = () => {
    const {user} = useBoardingStore();

    if (!user) {
        return <Redirect href={"/onboarding"} />;
    }

    return <Stack
        screenOptions={{
            headerStyle: { backgroundColor: '#f4511e' }, // Modifie la couleur de fond de l'en-tête pour tous les écrans
            headerTintColor: '#fff', // Ajuste la couleur du texte de l'en-tête pour tous les écrans
        }}
    >
        <Stack.Screen
            name="index"
            options={{ headerShown: false }} // Personnalise le titre pour la page A
        />
        <Stack.Screen
            name="[id]"
            options={{ headerBackTitle: 'Retour' }} // Modifie le texte du bouton de retour pour
        />
    </Stack>
};

export default TabsLayout;
