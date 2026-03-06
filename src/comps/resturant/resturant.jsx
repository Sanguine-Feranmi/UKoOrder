import { menuData } from "../data/menuData";
import MenuGrid from "../components/MenuGrid";

export default function Menu() {
  return (
    <section className="px-6 md:px-12 py-10">
      <h1 className="text-3xl font-semibold mb-6">All Restaurants</h1>
      <MenuGrid menus={menuData} />
    </section>
  );
}
