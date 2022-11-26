import Image from "next/image";
import { AiOutlineSwap } from "react-icons/ai";
import TetherImage from "src/images/Tether-Icon.png";
import IranImage from "src/images/Iran-Icon.png";
import { useEffect, useState } from "react";

export default function TetherCalculator() {
  const [input, setInput] = useState(1);
  const [calculatedInput, setCalculatedInput] = useState(36000);
  const [inputType, setInputType] = useState(false); // false: u2t | true: t2u

  const handleInputTypeChange = () => {
    setInputType((prev) => !prev);
    setInput(calculatedInput);
  };
  const handleInputChange = (e) => setInput(e.target.value);

  useEffect(() => {
    if (!inputType) {
      setCalculatedInput(input * 36000);
    } else {
      setCalculatedInput((input / 36000).toFixed(2));
    }
  }, [input]);

  return (
    <div className="relative flex flex-col items-center justify-center gap-5 rounded-lg bg-base-200 p-4 shadow-lg -mb-28">
      <h2 className="w-full text-right text-base-content/70">نرخ فعلی تتر</h2>
      {inputType ? (
        <>
          <Input
            Icon={IranImage}
            altIcon={"تومان"}
            width={36}
            top={8}
            left={1}
            input={input}
            handleInputChange={handleInputChange}
          />
          <Input
            Icon={TetherImage}
            altIcon={"تتر"}
            width={30}
            top={10}
            left={6}
            readOnly
            input={calculatedInput}
          />
        </>
      ) : (
        <>
          <Input
            Icon={TetherImage}
            altIcon={"تتر"}
            width={30}
            top={10}
            left={6}
            input={input}
            handleInputChange={handleInputChange}
          />
          <Input
            Icon={IranImage}
            altIcon={"تومان"}
            width={36}
            top={8}
            left={1}
            readOnly
            input={calculatedInput}
          />
        </>
      )}
      <Swaper handleInputTypeChange={handleInputTypeChange} />
    </div>
  );
}

function Input({
  Icon,
  altIcon,
  width,
  top,
  left,
  readOnly = false,
  input,
  handleInputChange = null,
}) {
  return (
    <div className="relative">
      <div
        className="absolute"
        style={{
          top,
          left,
        }}
      >
        <Image src={Icon} alt={altIcon} width={width} height={width} />
      </div>
      <p
        className="absolute text-sm bg-base-200 p-1 rounded-lg"
        style={{
          top: top + 2,
          left: left + 35,
        }}
      >
        {altIcon}
      </p>
      <input
        type="text"
        placeholder="0.01"
        readOnly={readOnly}
        value={input}
        onChange={handleInputChange}
        className="px-5 input w-full min-w-[250px] sm:min-w-[320px] md:min-w-[500px] cursor-auto"
      />
    </div>
  );
}

function Swaper({ handleInputTypeChange }) {
  return (
    <div className="absolute top-[85px] bg-base-200 p-2 rounded-full">
      <div
        className="w-4 h-4 grid place-content-center bg-base-300 shadow rounded-full p-6 cursor-pointer transition-colors hover:bg-base-200"
        onClick={handleInputTypeChange}
      >
        <AiOutlineSwap size={20} />
      </div>
    </div>
  );
}
