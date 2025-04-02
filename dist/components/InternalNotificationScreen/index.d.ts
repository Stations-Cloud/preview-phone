interface InternalNotificationScreenProps {
    banner?: string;
    bannerType?: "vertical" | "horizontal" | "small";
    pageTitle?: string;
    notificationDescription?: string;
    code?: string;
    discountRules?: string;
    buttonText?: string;
    buttonType?: "internal" | "external";
}
declare const InternalNotificationScreen: React.FC<InternalNotificationScreenProps>;
export default InternalNotificationScreen;
