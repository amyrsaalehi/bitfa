import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chips from "src/components/Shared/Chips";
import Date from "./Date";
import Time from "./Time";

export default function BitfundaCard({ image, title, defaultOpen }) {
  const router = useRouter();
  const show = router.query?.show;
  const [open, setOpen] = useState(false);

  const changeOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div
      className={`collapse ${
        open ? "collapse-open" : "collapse-close"
      } border border-base-300 transition-all shadow-sm hover:shadow-xl cursor-pointer rounded-box`}
    >
      <input
        type="checkbox"
        className="peer cursor-pointer"
        onChange={changeOpen}
      />
      <div className="collapse-title p-0">
        <div className="card image-full glass bg-base-200/60 ">
          <figure className="relative h-[170px]">
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              className="rounded-lg h-[170px]"
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </figure>
          <div className="card-body p-2">
            <div className="flex items-start gap-2">
              <div className="flex flex-col">
                <h2 className="card-title f-bold text-2xl py-2 px-2 lg:px-4 whitespace-nowrap">
                  فرصت شماره{" "}
                  <span className="f-fat text-3xl text-primary">{title}</span>
                </h2>
                <h3 className="f-bold text-primary text-2xl py-2 px-2 lg:px-4 whitespace-nowrap">
                  ارز <span className="font-bold">GGT</span>
                </h3>
                <button className="btn btn-primary btn-outline">
                  {open ? "بستن" : "مشاهده"} فرصت
                </button>
              </div>
              <div className="ml-auto h-full flex flex-col justify-between gap-1 py-2 px-2 lg:px-4">
                <Time />
                <Date />
                <Chips title={"بسته شد"} color="success" noplus />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-content">
        {show ? (
          <div className="flex flex-col gap-4 pt-8">
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              className="rounded-lg h-[300px]"
              priority
              style={{
                objectFit: "cover",
              }}
            />
            <h3 className="text-2xl text-primary f-bold text-center">
              ایردراپ تراست ولت
            </h3>
            <p className="leading-8">
              تراست ولت، یکی از محبوب ترین کیف پول‌های نرم افزاری نسخه افزونه
              خود را معرفی کرد و به همین مناسبت یک ایردراپ جدید معرفی کرده است
              که قرار است به آن بپردازیم. در ادامه این فرصت با نحوه شرکت در این
              ایردراپ آشنا خواهیم شد.
            </p>
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              className="rounded-lg h-[300px]"
              priority
              style={{
                objectFit: "cover",
              }}
            />
            <h3 className="text-2xl text-primary f-bold text-center">
              ایردراپ تراست ولت
            </h3>
            <p className="leading-8">
              تراست ولت، یکی از محبوب ترین کیف پول‌های نرم افزاری نسخه افزونه
              خود را معرفی کرد و به همین مناسبت یک ایردراپ جدید معرفی کرده است
              که قرار است به آن بپردازیم. در ادامه این فرصت با نحوه شرکت در این
              ایردراپ آشنا خواهیم شد.
            </p>
            <p className="leading-8">
              تراست ولت، یکی از محبوب ترین کیف پول‌های نرم افزاری نسخه افزونه
              خود را معرفی کرد و به همین مناسبت یک ایردراپ جدید معرفی کرده است
              که قرار است به آن بپردازیم. در ادامه این فرصت با نحوه شرکت در این
              ایردراپ آشنا خواهیم شد.
            </p>
            <p className="leading-8">
              تراست ولت، یکی از محبوب ترین کیف پول‌های نرم افزاری نسخه افزونه
              خود را معرفی کرد و به همین مناسبت یک ایردراپ جدید معرفی کرده است
              که قرار است به آن بپردازیم. در ادامه این فرصت با نحوه شرکت در این
              ایردراپ آشنا خواهیم شد.
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="f-fat text-3xl mb-4">
                قابل ترید در صرافی‌های زیر
              </h4>
              <p className="link link-hover text-xl text-primary f-bold">
                کوینکس
              </p>
              <p className="link link-hover text-xl text-primary f-bold">
                بایننس
              </p>
            </div>
            <div className="flex justify-center">
              <Chips title={"با ۵۰٪ سود بسته شد"} color="success" noplus />
            </div>
          </div>
        ) : (
          <div className="flex flex-col pt-8">
            <Link
              href={{
                pathname: "/sign",
                query: { referrer: "/bitfunda?show=true" },
              }}
              className="btn btn-primary"
            >
              ابتدا وارد شوید
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
