import Image from "next/image";
import { AiOutlineSwap } from "react-icons/ai";
import TetherImage from "src/images/Tether-Icon.png";
import USAImage from "src/images/USA-Icon.png";

export default function TetherCalculator() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-10 rounded-lg bg-base-200 p-4 shadow-lg -mb-28">
      <Input Icon={TetherImage} altIcon={"USDT"} />
      <Input Icon={USAImage} altIcon={"USD"} />
      <Changer />
    </div>
  );
}

function Input({ Icon, altIcon }) {
  return (
    <div className="relative">
      <div
        className="absolute top-2.5
      left-2"
      >
        <Image src={Icon} alt={altIcon} width={24} height={24} />
      </div>
      <input
        dir="ltr"
        type="text"
        placeholder="0.01"
        className="pr-10 input w-full min-w-[250px] sm:min-w-[320px] md:min-w-[500px]"
      />
    </div>
  );
}

function Changer() {
  return (
    <div className="absolute bg-base-200 p-2 rounded-full ">
      <div
        className="w-4 h-4 grid place-content-center bg-base-300 shadow rounded-full p-6 cursor-pointer"
        onClick={() => {}}
      >
        <AiOutlineSwap size={20} />
      </div>
    </div>
  );
}
