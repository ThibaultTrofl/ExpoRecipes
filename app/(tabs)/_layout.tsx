import { Tabs, Redirect } from "expo-router";
import {useBoardingStore} from "../../stores/boardingStore";


const TabsLayout = () => {
    const {name} = useBoardingStore();

    if (!name) {
        return <Redirect href={"/onboarding"} />;
    }

    return <Tabs />;
};

export default TabsLayout;
