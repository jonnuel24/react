import React, { useState } from "react";
import Fpanel from "./component/fpanel";
import FNavbar from "./component/farmersNavbar";

function Setting() {
  const [settings, setSettings] = useState({
    username: "",
    email: "",
    notification: true,
    theme: "light",
  });
  
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  ); // Default profile image URL

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfileImage(file);
    }
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
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
            <strong className="flex justify-start text-2xl">Settings</strong>
            <button
              onClick={handleSave}
              className="px-4 py-2 border-2 border-gray-300 rounded-xl flex gap-2 items-center hover:bg-green-100 hover:text-green-800"
            >
              Save
            </button>
          </div>
          <div className="flex bg-gray-100 h-100 w-full p-4 gap-4">
            <div className="flex flex-col bg-white rounded-xl p-4 space-y-4 w-[50%]">
              
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-64 h-64 object-cover rounded-full border border-gray-300"
                  />
                  <label className="absolute bottom-0 right-0 p-2 bg-white border border-gray-300 rounded-full cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <span className="text-gray-600">Change</span>
                  </label>
                </div>
                <div className="text-sm text-gray-500 mt-2">Profile Picture</div>
              </div>

              {/* Username */}
              <div className="flex flex-col items-start">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={settings.username}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col items-start">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              {/* Notification */}
              <div className="flex flex-col items-start">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="notification"
                >
                  Notifications
                </label>
                <input
                  type="checkbox"
                  name="notification"
                  checked={settings.notification}
                  onChange={handleChange}
                  className="border p-2 rounded-md"
                />
              </div>
              
              {/* Address */}
              <div className="flex flex-col items-start">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={settings.address || ""}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              {/* Theme */}
              <div className="flex flex-col items-start">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="theme"
                >
                  Theme
                </label>
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
