import React from "react";
import Image from "next/image";

const BottomProviders = () => {
  return (
    <div className="border border-gray-800 rounded-full px-2 py-1 flex items-center gap-1 flex-shrink-0">
      <Image
        src="https://axiom.trade/images/meteora.svg"
        alt="Meteora"
        width={12}
        height={12}
        className="flex-shrink-0"
      />
      <Image
        src="https://axiom.trade/images/pump.svg"
        alt="Pump"
        width={12}
        height={12}
        className="flex-shrink-0"
      />
      <Image
        src="https://axiom.trade/images/bonk.svg"
        alt="Bonk"
        width={12}
        height={12}
        className="flex-shrink-0"
      />
    </div>
  );
};

export default BottomProviders;
