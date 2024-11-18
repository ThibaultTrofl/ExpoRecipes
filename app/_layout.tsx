import { Tabs, Redirect } from "expo-router";
import {useBoardingStore} from "../../stores/boardingStore";


const TabsLayout = () => {
    const {user} = useBoardingStore();

    if (!user) {
        return <Redirect href={"/onboarding"} />;
    }

    return <Tabs />;
};

export default TabsLayout;
