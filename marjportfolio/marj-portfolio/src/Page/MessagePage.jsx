import React from "react";
import { Avatar1 } from "../components/Avatar";

const MessagePage = () => {
  return (
   
     
      <div   className="bg-cover bg-center py-24" style=
      {{ backgroundImage: 'url("/images/bg2.webp")' }}>
    
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex items-center justify-between">
            <p className="text-black font-jakarta-sans font-normal text-4xl leading-56">
              “My focus is always on creating designs that not only reflect my
              clients' needs but also resonate with their target audience. With
              each project, I aim to strike a balance between aesthetics and
              usability to deliver a compelling user experience.”
            </p>

          </div>
          <div className="pt-4">
          <Avatar1/>
          </div>
         
        </div>
      </div>
   
  );
};

export default MessagePage;
