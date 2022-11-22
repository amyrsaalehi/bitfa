import Image from "next/image";
import Layout from "src/components/Layout";
import Form from "src/components/Sign/Form";
import FormImageDesktop from "src/images/Form-1.png";
import FormImageMobile from "src/images/Form-3.png";

export default function SignUpPage() {
  return (
    <Layout title="ورود / ثبت نام">
      <div className="flex flex-col-reverse md:flex-row my-2">
        <Form />
        <div className="w-full md:w-1/2 relative h-[400px] md:h-screen">
          <Image
            src={FormImageMobile}
            alt="ورود یا ثبت نام"
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
