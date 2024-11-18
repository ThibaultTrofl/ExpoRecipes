import {Tabs, Redirect, Stack} from "expo-router";
import {useBoardingStore} from "../../stores/boardingStore";

const TabsLayout = () => {
    const {user} = useBoardingStore();

    if (!user) {
        return <Redirect href={"/onboarding"} />;
    }

    return <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#e91e63'
        }}
    >
        <Tabs.Screen
            name="recipes"
            options={{
                title: 'Recettes',
                // tabBarIcon: ({ color }) => <CookingPot color={color} size={24} />,
            }}
        />
        <Tabs.Screen
            name="favs"
            options={{
                title: 'Favoris',
                // tabBarIcon: ({ color }) => <Heart/>
            }}
        />

    </Tabs>
};

export default TabsLayout;
