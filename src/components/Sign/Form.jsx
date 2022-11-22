import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { emailRegExp, mobileRegExp } from "src/helpers/regex";

export default function Form() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState(null);

  const chnageInput = (e) => setInput(e.target.value);

  useEffect(() => {
    if (emailRegExp.exec(input)) {
      setInputType(<AiOutlineMail size={20} />);
    } else if (mobileRegExp.exec(input)) {
      setInputType(<AiOutlineMobile size={20} />);
    } else {
      setInputType(null);
    }

    return () => {
      setInputType(null);
    };
  }, [input]);

  return (
    <div className="flex flex-col justify-center w-full md:w-1/2 bg-base-100 px-2">
      <div className="flex flex-col justify-center gap-4 bg-base-200/70 py-12 px-4 rounded-lg">
        <div className="divider mt-2 mb-10">
          <h1 className="font-bold text-center text-3xl md:text-4xl">
            ورود یا ثبت نام
          </h1>
        </div>
        <p>
          برای ورود یا ثبت نام ابتدا شماره موبایل یا ایمیل خود را وارد کنید یا
          از طریق گوگل وارد شوید.
        </p>
        <div className="form-control">
          <label className="input-group">
            <span
              style={{
                minWidth: 52,
              }}
            >
              {inputType}
            </span>
            <input
              type="text"
              value={input}
              onChange={chnageInput}
              placeholder="شماره موبایل"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button className="btn">ورود / ثبت نام</button>
        <Link href={"/reset-password"} className="underline underline-offset-4">
          رمز عبور خود را فراموش کردید؟
        </Link>
      </div>
    </div>
  );
}
