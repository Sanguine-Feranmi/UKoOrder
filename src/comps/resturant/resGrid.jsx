import MenuCard from "./resCard";

export default function MenuGrid({ menus }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {menus.map((menu, index) => (
        <MenuCard key={`${menu.id}-${index}`} menu={menu} />
      ))}
    </div>
  );
}
