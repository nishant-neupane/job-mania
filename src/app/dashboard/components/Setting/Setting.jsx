// Settings.js
import { useState } from "react";
import SettingsTabs from "./SettingsTabs";
import ProfileTab from "./ProfileTab";
import LoginDetailsTab from "./LoginDetailsTab";
import NotificationsTab from "./NotificationsTab";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("My Profile");

  return (
    <div className="">
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "My Profile" && <ProfileTab />}
      {activeTab === "Login Details" && <LoginDetailsTab />}
      {activeTab === "Notifications" && <NotificationsTab />}
    </div>
  );
}
