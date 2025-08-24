import React from 'react';
import NetflixAvatar from '../../NetflixAvatar';

const PreferenceSetting = () => {
  const settingsSections = [
    { icon: "ri-translate-2", title: "Languages", description: "Set languages for display and audio" },
    { icon: "ri-error-warning-line", title: "Adjust Parental Controls", description: "Edit maturity rating and title restrictions" },
    { icon: "ri-subtitle", title: "Subtitle appearance", description: "Customize the way subtitles appear" },
    { icon: "ri-play-circle-line", title: "Playback settings", description: "Set autoplay and audio, video quality" },
    { icon: "ri-notification-3-line", title: "Notification settings", description: "Manage notifications for email, text, push" },
    { icon: "ri-history-line", title: "Viewing activity", description: "Manage viewing history and ratings" },
    { icon: "ri-shield-user-line", title: "Privacy and data settings", description: "Manage usage of personal info" },
  ];

  return (
    <div className="mt-8">
      <div className="pl-10 pb-2">
        <p>Preference</p>
      </div>
      <div className="grid grid-cols-1 w-[90%] mx-auto border border-gray-300 rounded-lg">
        {settingsSections.map((section, index) => (
          <div key={index}>
            <div className="flex items-center justify-between py-4.5 w-[90%] mx-auto hover:cursor-pointer hover:bg-[#f2f2f2]/36">
              <div className="flex items-center gap-2 ">
                <i className={`${section.icon} text-3xl text-gray-500`}></i>
                <div>
                  <p className="text-[16px] font-medium">{section.title}</p>
                  <p className='text-[13px] text-[#333]'>{section.description}</p>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-2xl text-gray-500"></i>
            </div>

            {index !== settingsSections.length - 1 && (
              <div className="border-t border-gray-300 w-[90%] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferenceSetting;
