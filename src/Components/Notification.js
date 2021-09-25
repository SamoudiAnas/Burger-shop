import React from "react";
import styled from "styled-components";
import { useNotificationContext } from "../contexts/NotificationContext";
import { MainColor } from "../utils/constants";

function Notification() {
  const [notification, setNotification] = useNotificationContext();
  console.log(notification);
  return (
    <Wrapper notification={notification}>
      <div className="label"></div>
      <div className="holder">
        <p>Item added to cart!</p>
      </div>
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.notification ? "2rem" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: top 0.3s ease;

  .holder {
  }
  .label {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${MainColor};
    width: 4px;
    height: 100%;
  }
`;
export default Notification;
