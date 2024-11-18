import {Tabs, Redirect, Stack} from "expo-router";
import {useBoardingStore} from "../../stores/boardingStore";


const TabsLayout = () => {
    const {user} = useBoardingStore();

    if (!user) {
        return <Redirect href={"/onboarding"} />;
    }

    return <Stack />;
};

export default TabsLayout;
