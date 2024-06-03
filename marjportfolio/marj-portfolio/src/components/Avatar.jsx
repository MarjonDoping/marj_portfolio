import React from "react";

export const Avatar1 = () => {
  return (
    <div class="flex items-center gap-4 rounded-lg">
      <img src="/images/marj.png" alt="Image 1" className="w-16 h-16 mr-4 rounded-xl" />
      <div class="font-medium dark:text-black">
        <div>Marjon V. Doping</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Web Designer/ UI UX
        </div>
      </div>
    </div>
  );
};

