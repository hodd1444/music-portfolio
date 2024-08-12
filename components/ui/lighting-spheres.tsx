import React from 'react';

const LightingSpheres = () => {
  return (
    <div>
        <div 
            className="absolute top-[-40%] left-[-25%] w-[40%] h-full bg-[#5668EC] opacity-[21%] rounded-full"
            style={{filter: "blur(200px)"}}
        ></div>
        <div className="absolute bottom-[-10%] right-[-30%] w-[40%] h-full bg-[#C95291] opacity-[24%] rounded-full"
            style={{filter: "blur(200px)"}}
        ></div>
    </div>
  );
};

export default LightingSpheres;
//<div className="absolute w-[847px] h-[874px] bg-[#C95291] opacity-[21%] rounded-full filter blur-[200px]"></div>