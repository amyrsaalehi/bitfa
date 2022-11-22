import Image from "next/image";
import Layout from "src/components/Layout";
import Form from "src/components/Sign/Form";
import FormImageDesktop from "src/images/Form-1.png";
import FormImageMobile from "src/images/Form-2.png";

export default function SignUpPage() {
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row gap-2 my-2">
        <Form />
        <div className="w-full md:w-1/2 relative h-[500px] md:h-screen">
          <Image
            src={FormImageDesktop}
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
