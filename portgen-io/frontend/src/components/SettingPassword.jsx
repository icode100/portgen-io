import { useState } from "react";

import Cookies from "js-cookie";
import axios from "axios";


export default function SettingPass() {
  const [settingPass, setPass] = useState({
    recovery: "",
    pass: "",
    cnfpass: "",
  });

  const [alert, setAlert] = useState({ open: false, type: "", message: "" });

  function handleChange(event) {
    setPass({
      ...settingPass,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = Cookies.get("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        "https://portgen-io.vercel.app/portapi/v1/settings/changePassword",
        settingPass,
        { withCredentials: true, headers: headers }
      );

      console.log("Password update successful:", response.data);
      setAlert({
        open: true,
        type: "success",
        message: "Password updated successfully!",
      });
    } catch (error) {
      console.error("Password update failed:", error);
      setAlert({
        open: true,
        type: "error",
        message: "Password update failed!",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[400px]"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Change Password
        </h2>
        <div className="mb-4">
          <label
            htmlFor="recovery"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recovery Pin
          </label>
          <input
            id="recovery"
            name="recovery"
            type="password"
            placeholder="Enter your recovery pin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingPass.recovery}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pass"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <input
            id="pass"
            name="pass"
            type="password"
            placeholder="Enter your new password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingPass.pass}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cnfpass"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            id="cnfpass"
            name="cnfpass"
            type="password"
            placeholder="Re-enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingPass.cnfpass}
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

      {alert.open && (
        <div
          className={`mt-6 px-4 py-2 rounded-lg text-white ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alert.message}
        </div>
      )}
    </div>
  );
}