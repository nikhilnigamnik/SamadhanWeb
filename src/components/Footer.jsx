import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-300  flex flex-col justify-center">
      <div className="text-center mt-6 mb-6 flex flex-col gap-5">
        <p>Disclaimer | Terms & Conditions</p>
        <p>
          @<strong>Copyright 2023</strong>, Ministry of village seva Government
          of India
        </p>
      </div>
      <div  className="flex mb-8 justify-center gap-10">
        <img className="w-20 bg-white rounded-full p-4 h-20"   src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-1024.png"/>
        <img className="w-20 bg-white rounded-full p-4 h-20" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png"/>
        <img className="w-20 bg-white rounded-full p-4 h-20" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-1024.png"/>
        <img className="w-20 bg-white rounded-full p-4 h-20" src="https://cdn3.iconfinder.com/data/icons/social-icons-33/512/Telegram-1024.png"/>
      </div>
    </div>
  );
};

export default Footer;
