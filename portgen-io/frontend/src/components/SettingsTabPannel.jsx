import { useState } from "react";
import SettingEmail from "./SettingEmail";
import SettingPass from "./SettingPassword";
import SettingUser from "./SettingUser";

import PropTypes from "prop-types";

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="p-4"
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default function SettingsTabPannel() {
  const [value, setValue] = useState(0);

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div className="w-full bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <button
          className={`flex-1 py-2 text-center ${
            value === 0 ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleChange(0)}
        >
          Change Email
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            value === 1 ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleChange(1)}
        >
          Change Username
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            value === 2 ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleChange(2)}
        >
          Change Password
        </button>
      </div>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <SettingEmail />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SettingUser />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SettingPass />
      </TabPanel>
    </div>
  );
}