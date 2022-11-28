import Chips from "src/components/Shared/Chips";

export default function Importance() {
  return (
    <>
      <h3 className="f-bold">میزان اهمیت</h3>
      <div className="flex flex-wrap gap-1">
        <Chips title={"فوری"} color="error" />
        <Chips title={"روز"} color="warning" />
        <Chips title={"آینده"} color="success" />
      </div>
    </>
  );
}
