import React from 'react';

const Button = ({ icon, content, className='' }) => {
  return (
    <div>
      <button className={`flex items-center gap-2 rounded-full px-[26.38px] py-[15px] text-[18px] text-white} ${className}`}>
        {icon} 
        <p>{content}</p>
      </button>
    </div>
  );
};

export default Button;

