import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Chips from "src/components/Shared/Chips";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bitfa.ir/api/categories`)
      .then((res) => res.data)
      .then((data) => {
        const c = data
          .filter((c) => c.route)
          .map((c) => ({
            id: c.id,
            name: c.name,
            route: c.route.split("/category/")?.[1],
          }));
        setCategories(c);
      });
  }, []);

  return (
    <>
      <h3 className="f-bold">دسته‌بندی مقالات</h3>
      <div className="flex flex-wrap gap-1">
        <Link href={`/articles?page=1&category=0&ord=latest`} replace>
          <Chips id={0} title={"همه"} noplus />
        </Link>
        {categories.map((t) => (
          <Link
            key={t.id}
            href={`/articles?page=1&category=${t.id}&ord=latest`}
            replace
          >
            <Chips id={t.id} title={t.name} noplus />
          </Link>
        ))}
      </div>
    </>
  );
}
