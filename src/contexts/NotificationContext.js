import React, { useContext, createContext, useState } from "react";

const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(false);

  return (
    <NotificationContext.Provider value={[notification, setNotification]}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};
