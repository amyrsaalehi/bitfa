import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { emailRegExp, mobileRegExp } from "src/helpers/regex";
import { FcGoogle } from "react-icons/fc";

const DrawType = () => (
  <div className="flex items-center">
    <AiOutlineMobile size={15} className="p-0" />
    <span className="p-1">/</span>
    <AiOutlineMail size={15} className="p-0" />
  </div>
);

export default function Form() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState(<DrawType />);

  const chnageInput = (e) => setInput(e.target.value);

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
    <div className="flex flex-col justify-center w-full md:w-1/2 bg-base-100 px-4">
      <div className="flex flex-col justify-center gap-4 bg-base-200/70 py-12 px-4 rounded-lg">
        <div className="divider mt-2 mb-8">
          <h1 className="f-bold text-center text-3xl md:text-4xl">
            ورود یا ثبت نام
          </h1>
        </div>
        <p className="mb-2">
          برای ورود یا ثبت نام ابتدا شماره موبایل یا ایمیل خود را وارد کنید یا
          از طریق گوگل وارد شوید.
        </p>
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
        <button className="btn btn-primary">ورود / ثبت نام</button>

        <button className="btn btn-outline">
          <span className="mr-1">ورود با</span>
          <FcGoogle size={22} />
        </button>

        <Link href={"/reset-password"} className="underline underline-offset-4">
          رمز عبور خود را فراموش کردید؟
        </Link>
      </div>
    </div>
  );
}
