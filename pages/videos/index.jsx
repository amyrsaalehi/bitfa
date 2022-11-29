import Layout from "src/components/Layout";
import VideoCard from "src/components/Videos/VideoCard";

export default function VideosPage() {
  return (
    <Layout title={"ویدیو‌"}>
      <div className="flex flex-col py-24">
        <h1 className="f-fat text-5xl text-center mb-8">ویدیو</h1>
        <div className="container masonary gap-4">
          {[...Array(12).keys()].map((key) => {
            return <VideoCard key={key} />;
          })}
        </div>
        <div className="flex justify-center mt-8">
          <div className="btn-group" dir="ltr">
            <button className="btn btn-active">1</button>
            <button className="btn ">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
