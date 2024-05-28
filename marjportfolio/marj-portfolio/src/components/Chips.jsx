import React from "react";

export const PrimaryChip = ({ children }) => {
  const gradientCustom =
    "linear-gradient(219deg, #9DE8EE -10.9%, #1A6350 -10.88%, #F829AD 43.45%, #FBF1A0 100%)";

  return (
    <div
      className="relative grid select-none items-center whitespace-nowrap rounded-lg"
      style={{ backgroundImage: gradientCustom, padding: "8px 12px" }}
    >
      <span className="font-sans text-xs font-bold uppercase text-white">
        {children}
      </span>
    </div>
  );
};

export const PrimaryChip1 = ({ children }) => {
  const gradientCustom =
    "linear-gradient(103deg, #A148CA 9.54%, #502464 124.81%)";

  return (
    <div
      className="relative grid select-none items-center whitespace-nowrap rounded-lg"
      style={{ backgroundImage: gradientCustom, padding: "8px 12px" }}
    >
      <span className="font-sans text-xs font-bold uppercase text-white">
        {children}
      </span>
    </div>
  );
};

export const PrimaryChip2 = ({ children }) => {
  const gradientCustom =
    "linear-gradient(127deg, #21759B 21.51%, #0B2835 192.31%)";

  return (
    <div
      className="relative grid select-none items-center whitespace-nowrap rounded-lg"
      style={{ backgroundImage: gradientCustom, padding: "8px 12px" }}
    >
      <span className="font-sans text-xs font-bold uppercase text-white">
        {children}
      </span>
    </div>
  );
};

export const PrimaryChip3 = ({ children }) => {
  const gradientCustom =
    "linear-gradient(97deg, #61DAFB 5.74%, #3A8195 127.84%)";

  return (
    <div
      className="relative grid select-none items-center whitespace-nowrap rounded-lg"
      style={{ backgroundImage: gradientCustom, padding: "8px 12px" }}
    >
      <span className="font-sans text-xs font-bold uppercase text-white">
        {children}
      </span>
    </div>
  );
};

export const ThreeChip = ({ children }) => {
  const gradientCustom =
    "linear-gradient(219deg, #9DE8EE -10.9%, #1A6350 -10.88%, #F829AD 43.45%, #FBF1A0 100%)";

  return (
    <>
      <span className="bg-chipsBlack text-xs font-medium me-2 p-3 rounded ">
        <span className="text-xs font-bold uppercase text-chipsText">
          {children}
        </span>
      </span>
    </>
  );
};
