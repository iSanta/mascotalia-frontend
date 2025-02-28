import { useState, useEffect, ReactNode } from "react";
import { NotificationType } from "@/Domain/common/notification/NotificationType";
import {
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  SmileOutlined,
} from "@/Presentation/design-system";
import { notification } from "antd";

type NotificationProps = {
  duration?: number;
}

const useNotification = ({ duration = 5 }: NotificationProps = {}) => {
  const [api, contextHolder] = notification.useNotification();
  const [notificationData, setNotificationData] = useState(null);

  const showNotification = (type: NotificationType, text: string, title: string = "Proceso exitoso", button?: ReactNode) => {
    let message = "";
    let description = "";
    let icon = null;
    let style = {};

    switch (type) {
      case "success":
        message = title;
        description = text;
        icon = <SmileOutlined style={{ color: "#52c41a" }} />;
        style = { backgroundColor: "#f6ffed", border: "1px solid #b7eb8f" };
        break;
      case "error":
        message = title;
        description = text;
        icon = <CloseCircleOutlined style={{ color: "#f5222d" }} />;
        style = { backgroundColor: "#fff2f0", border: "1px solid #ffccc7" };
        break;
      case "warning":
        message = title;
        description = text;
        icon = <ExclamationCircleOutlined style={{ color: "#faad14" }} />;
        style = { backgroundColor: "#fff7e6", border: "1px solid #ffe58f" };
        break;
      default:
        return;
    }

    setNotificationData({ message, description, type, button });
  };

  useEffect(() => {
    if (!notificationData) return;

    api.open({
      message: notificationData.message,
      description: notificationData.description,
      type: notificationData.type,
      showProgress: true,
      duration,
      btn: (
        <>
          {notificationData.button || <></>}
        </>
      ),
    });

  }, [notificationData, api]);

  return {
    showNotification,
    context: contextHolder,
  };
};

export default useNotification;
