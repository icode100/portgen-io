import { useState } from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function SettingEmail() {
  const [settingEmail, setEmail] = useState({
    Email: "",
    NewEmail: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setEmail({
      ...settingEmail,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const url = "https://portgen-io.vercel.app/portapi/v1/settings/changemail";
      const token = Cookies.get("token");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settingEmail),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Email change successful:", data);

      setTimeout(() => {
        Cookies.remove("token");
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Email change failed:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[400px]"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Change Email</h2>
        <div className="mb-4">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Previous Email
          </label>
          <input
            id="Email"
            name="Email"
            type="email"
            placeholder="Enter your previous email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingEmail.Email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="NewEmail"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Email
          </label>
          <input
            id="NewEmail"
            name="NewEmail"
            type="email"
            placeholder="Enter your new email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={settingEmail.NewEmail}
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
    </div>
  );
}