import React, { useState } from "react";
import Fpanel from "./component/fpanel";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "Message", content: "You have a new message from John.", read: false },
    { id: 2, type: "Alert", content: "Your profile has been updated successfully.", read: true },
    { id: 3, type: "Reminder", content: "Don't forget to check your settings.", read: false },
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleDelete = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div>
      <FNavbar />
      <div className="pl-[64px] pr-[32px] flex flex-row w-full">
        {/* Side panel */}
        <div>
          <Fpanel />
        </div>
        <div className="w-full px-8 py-12 space-y-4">
          <div className="flex justify-between w-full">
            <strong className="flex justify-start text-2xl">Notifications</strong>
            <button
              onClick={() => setNotifications([])} // Clear all notifications
              className="px-4 py-2 border-2 border-gray-300 rounded-xl flex gap-2 items-center hover:bg-red-100 hover:text-red-800"
            >
              <Icon icon="mdi:delete" width="24" height="24" style={{ color: 'black' }} />
              Clear All
            </button>
          </div>
          <div className="bg-gray-100 h-100 w-full p-4">
            <div className="flex flex-col bg-white rounded-xl p-4 space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex justify-between items-center p-4 rounded-md border ${notification.read ? "bg-gray-200" : "bg-white border-gray-300"}`}
                  >
                    <div className="flex flex-col">
                      <div className="font-bold text-sm">{notification.type}</div>
                      <div className="text-gray-700">{notification.content}</div>
                    </div>
                    <div className="flex gap-2">
                      {!notification.read && (
                        <button
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="px-2 py-1 border-2 border-blue-500 rounded-md text-blue-500 hover:bg-blue-100"
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(notification.id)}
                        className="px-2 py-1 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-100"
                      >
                        <Icon icon="mdi:delete" width="16" height="16" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-600">No notifications</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
