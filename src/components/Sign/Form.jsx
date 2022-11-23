import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { emailRegExp, mobileRegExp } from "src/helpers/regex";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";

const DrawType = () => (
  <div className="flex items-center">
    <AiOutlineMobile size={15} className="p-0" />
    <span className="p-1">/</span>
    <AiOutlineMail size={15} className="p-0" />
  </div>
);

export default function Form() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [inputType, setInputType] = useState(<DrawType />);

  const chnageInput = (e) => setInput(e.target.value);

  const changeCode = (e) => setCode(e.target.value);

  const handleLogin = () => {
    switch (step) {
      case 0:
        setStep(1);
        break;
      case 1:
        setStep(0);
        break;
    }
  };

  const handleGoBack = () => setStep(0);

  useEffect(() => {
    if (emailRegExp.exec(input)) {
      setInputType(<AiOutlineMail size={20} />);
    } else if (mobileRegExp.exec(input)) {
      setInputType(<AiOutlineMobile size={20} />);
    } else {
      setInputType(<DrawType />);
    }

    return () => {
      setInputType(<DrawType />);
    };
  }, [input]);

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-base-100 px-4">
      <div className="w-full max-w-[700px] relative flex flex-col justify-center gap-4 bg-base-200/70 py-12 px-4 rounded-lg">
        {step === 1 ? (
          <button
            className="btn btn-circle btn-ghost absolute top-2 left-2"
            onClick={handleGoBack}
          >
            <AiOutlineArrowLeft size={18} />
          </button>
        ) : null}
        <div className="divider mt-2 mb-8">
          <h1 className="f-bold text-center text-3xl md:text-4xl">
            {step === 0 ? "ورود یا ثبت نام" : "کد تایید"}
          </h1>
        </div>
        <p className="mb-2">
          {step === 0
            ? `برای ورود یا ثبت نام ابتدا شماره موبایل یا ایمیل خود را وارد کنید یا
          از طریق گوگل وارد شوید.`
            : `کد تایید ارسال شده را وارد کنید.`}
        </p>
        {step === 0 ? (
          <div className="form-control">
            <label className="input-group">
              <span
                className="grid place-content-center p-1"
                style={{
                  width: 55,
                }}
              >
                {inputType}
              </span>
              <input
                type="text"
                value={input}
                onChange={chnageInput}
                placeholder="موبایل یا ایمیل"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        ) : (
          <div className="form-control">
            <label className="input-group">
              <span
                className="grid place-content-center p-1"
                style={{
                  width: 55,
                }}
              >
                <TiTick size={20} />
              </span>
              <input
                type="text"
                value={code}
                onChange={changeCode}
                placeholder="کد تایید"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        )}
        <button className="btn btn-primary" onClick={handleLogin}>
          {step === 0 ? "ورود / ثبت نام" : "تایید"}
        </button>

        {step === 0 ? (
          <button className="btn btn-outline">
            <span className="mr-1">ورود با</span>
            <FcGoogle size={22} />
          </button>
        ) : null}

        {step === 0 ? (
          <Link
            href={"/reset-password"}
            className="underline underline-offset-4"
          >
            رمز عبور خود را فراموش کردید؟
          </Link>
        ) : null}
      </div>
    </div>
  );
}
