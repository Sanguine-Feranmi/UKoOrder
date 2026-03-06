import CatSec from "./catSec";
import { categories } from "./cats";

export default function Categories() {
  return (
    <CatSec
      title="All Categories"
      categories={categories}
      limit={null}
      showViewAll={false}
    />
  );
}