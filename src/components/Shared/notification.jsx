import React from "react";

import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const Notification = () => {
  return (
    <React.Fragment>
      <NotificationsActiveIcon className="notification"></NotificationsActiveIcon>
      <span className="notification__span">3</span>
    </React.Fragment>
  );
};

export default Notification;
