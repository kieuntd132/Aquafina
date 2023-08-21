
type LoginProps = {};
type ScreenOTPProps = {
    phoneNumber: string | undefined;
    type: boolean;
    name?: string | undefined;
};
type RegisterProps = {};
type NotificationOTPProps = {};

export type StackNavigation = {
    Login: LoginProps | undefined;
    Register: RegisterProps | undefined;
    ScreenOTP: ScreenOTPProps | undefined;
    NotificationOTP: NotificationOTPProps | undefined;
}
export default StackNavigation