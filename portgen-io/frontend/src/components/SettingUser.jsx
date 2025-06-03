import { useState } from "react";

import Cookies from "js-cookie";
import axios from "axios";

export default function SettingUser() {
  const [openAlert, setOpenAlert] = useState(false); // State for managing Alert visibility
  const [alertSeverity, setAlertSeverity] = useState(""); // State for Alert severity


  const [settingUser, setUser] = useState({
    email: "",
    user: "",
  });

  const handleChange = (event) => {
    setUser({
      ...settingUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = Cookies.get("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        "https://portgen-io.vercel.app/portapi/v1/settings/changeUserName",
        settingUser,
        { withCredentials: true, headers: headers }
      );

      console.log("Username update successful:", response.data);
      setOpenAlert(true);
      setAlertSeverity("success"); // Set success severity
    } catch (error) {
      console.error("Username update failed:", error);
      setOpenAlert(true);
      setAlertSeverity("error"); // Set error severity
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[400px]"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Change Username
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recovery Pin
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your recovery pin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingUser.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Username
          </label>
          <input
            id="user"
            name="user"
            type="text"
            placeholder="Enter your new username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingUser.user}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>

      {openAlert && (
        <div
          className={`mt-6 px-4 py-2 rounded-lg text-white ${
            alertSeverity === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alertSeverity === "success"
            ? "Username updated successfully!"
            : "Username update failed!"}
        </div>
      )}
    </div>
  );
}