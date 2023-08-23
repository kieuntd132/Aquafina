import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../container/Login/Login";
import NotificationOTP from "../container/Login/NotificationOTP";
import Register from "../container/Login/Register";
import ScreenOTP from "../container/Login/ScreenOTP";
import Home from "../container/Home/Home";
import GreenWorld from "../container/Home/GreenWorld";
import GreenMap from "../container/Home/GreenMap";
import GreenGift from "../container/Home/GreenGift";
import GreenBonusPoint from "../container/Home/GreenBonusPoint";
import Charts from "../container/Home/Charts";

const Stack = createNativeStackNavigator<StackNavigation>();
type LoginProps = {};
type ScreenOTPProps = {
    phoneNumber: string | undefined;
    type: boolean;
    name?: string | undefined;
};
type RegisterProps = {};
type NotificationOTPProps = {};
type MainScreenProps = {};
type GreenWorldProps = {};
type GreenGiftProps = {};
type GreenBonusPointsProps = {};
type GreenMapProps = {};
type ChartsProps = {};
export type StackNavigation = {
    Login: LoginProps | undefined;
    Register: RegisterProps | undefined;
    ScreenOTP: ScreenOTPProps | undefined;
    NotificationOTP: NotificationOTPProps | undefined;
    Home: MainScreenProps | undefined;
    "Thế giới xanh": GreenWorldProps | undefined;
    "Quà tặng xanh": GreenGiftProps | undefined;
    "Điểm thưởng xanh": GreenBonusPointsProps | undefined;
    "Bản đồ xanh": GreenMapProps | undefined;
    "Bảng xếp hạng": ChartsProps | undefined;
}
const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ScreenOTP" component={ScreenOTP} />
            <Stack.Screen name="NotificationOTP" component={NotificationOTP} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Thế giới xanh" component={GreenWorld} />
            <Stack.Screen name="Bản đồ xanh" component={GreenMap} />
            <Stack.Screen name="Quà tặng xanh" component={GreenGift} />
            <Stack.Screen name="Điểm thưởng xanh" component={GreenBonusPoint} />
            <Stack.Screen name="Bảng xếp hạng" component={Charts} />
        </Stack.Navigator>
    )
}
export default StackNavigation