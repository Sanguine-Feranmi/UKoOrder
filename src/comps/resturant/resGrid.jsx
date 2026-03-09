import MenuCard from "./resCard";

export default function MenuGrid({ menus, onMenuClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
      {menus.map((menu, index) => (
        <MenuCard key={`${menu.id}-${index}`} menu={menu} onClick={() => onMenuClick?.(menu)} />
      ))}
    </div>
  );
}
