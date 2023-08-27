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
import RulesScreen from "../container/Home/RulesScreen";
import Warning from "../container/Warning/Warning";
import DescriptionWarning from "../container/Warning/DescriptionWarning";

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
type WarningScreenProps = {};
type WarningDescriptionScreenProps = {};
type RulesScreenProps = {};

export type StackNavigation = {
    Login: LoginProps | undefined;
    Register: RegisterProps | undefined;
    ScreenOTP: ScreenOTPProps | undefined;
    NotificationOTP: NotificationOTPProps | undefined;
    Home: MainScreenProps | undefined;
    "Thế Giới Xanh": GreenWorldProps | undefined;
    "Quà Tặng Xanh": GreenGiftProps | undefined;
    "Điểm Thưởng Xanh": GreenBonusPointsProps | undefined;
    "Bản Đồ Xanh": GreenMapProps | undefined;
    "Bảng Xếp Hạng": ChartsProps | undefined;
    WarningScreen: WarningScreenProps | undefined;
    WarningDescriptionScreen: WarningDescriptionScreenProps | undefined;
    RulesScreen: RulesScreenProps | undefined;
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
            <Stack.Screen name="Thế Giới Xanh" component={GreenWorld} />
            <Stack.Screen name="Bản Đồ Xanh" component={GreenMap} />
            <Stack.Screen name="Quà Tặng Xanh" component={GreenGift} />
            <Stack.Screen name="Điểm Thưởng Xanh" component={GreenBonusPoint} />
            <Stack.Screen name="Bảng Xếp Hạng" component={Charts} />
            <Stack.Screen name="WarningScreen" component={Warning} />
            <Stack.Screen
                name="WarningDescriptionScreen"
                component={DescriptionWarning}
            />
            <Stack.Screen name="RulesScreen" component={RulesScreen} />
        </Stack.Navigator>
    )
}
export default StackNavigation