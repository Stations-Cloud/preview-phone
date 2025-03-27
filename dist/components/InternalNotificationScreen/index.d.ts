interface InternalNotificationScreenProps {
    barText?: string;
    banner?: string;
    bannerType?: "vertical" | "horizontal" | "small";
    pageTitle?: string;
    notificationDescription?: string;
    code?: string;
    discountRules?: string;
    buttonText?: string;
}
declare const InternalNotificationScreen: React.FC<InternalNotificationScreenProps>;
export default InternalNotificationScreen;
