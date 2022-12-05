import Link from "next/link";
import { useRouter } from "next/router";
import Chips from "src/components/Shared/Chips";

export default function Category() {
  const router = useRouter();
  const type = router.query.type;

  return (
    <>
      <h3 className="f-bold">دسته‌بندی اخبار</h3>
      <div className="flex flex-wrap gap-1">
        <Link href={`/news?page=1&type=breaking&ord=latest`}>
          <Chips
            title={"اخبار فوری"}
            color="error"
            noplus
            selected={type === "breaking"}
          />
        </Link>
        <Link href={`/news?page=1&type=news&ord=latest`}>
          <Chips
            title={"اخبار"}
            color="success"
            noplus
            selected={type === "news"}
          />
        </Link>
      </div>
    </>
  );
}
