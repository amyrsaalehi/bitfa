import Chips from "src/components/Shared/Chips";

export default function Difficulity() {
  return (
    <>
      <h3 className="f-bold">میزان سختی</h3>
      <div className="flex flex-wrap gap-1">
        <Chips title={"پیشرفته"} color="error" />
        <Chips title={"متوسط"} color="warning" />
        <Chips title={"آسان"} color="success" />
      </div>
    </>
  );
}
