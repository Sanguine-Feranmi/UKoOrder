import * as React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, ShoppingBag, Menu, X } from "lucide-react"
import logo from '/logo.png'

const navbarData = {
  logo: {
    text: logo,
    href: "/"
  },
  menuItems: [
    {
      label: "Home",
      href: "/",
      hasDropdown: true,
      featured: {
        title: "Food App",
        description: "Delicious food delivered to your doorstep.",
        href: "/"
      },
      links: [
        { title: "About Us", href: "/about", description: "Learn more about our story and mission." },
        { title: "Our Menu", href: "/menu", description: "Explore our delicious food options." },
        { title: "Locations", href: "/locations", description: "Find restaurants near you." }
      ]
    },
    {
      label: "Menu",
      href: "/menu",
      hasDropdown: true,
      links: [
        { title: "Pizza", href: "/menu/pizza", description: "Fresh, handmade pizzas with premium toppings." },
        { title: "Burgers", href: "/menu/burgers", description: "Juicy burgers made with quality ingredients." },
        { title: "Salads", href: "/menu/salads", description: "Fresh, healthy salads with organic vegetables." },
        { title: "Desserts", href: "/menu/desserts", description: "Sweet treats to complete your meal." },
        { title: "Beverages", href: "/menu/beverages", description: "Refreshing drinks and specialty coffees." },
        { title: "Specials", href: "/menu/specials", description: "Today's chef recommendations and deals." }
      ]
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact",
      hasDropdown: true,
      iconItems: [
        { icon: CircleHelpIcon, label: "Support", href: "/support" },
        { icon: CircleIcon, label: "FAQ", href: "/faq" },
        { icon: CircleCheckIcon, label: "Feedback", href: "/feedback" }
      ]
    }
  ],
  cta: {
    text: "Order Now",
    href: "/order",
    icon: ShoppingBag
  }
};

export function NavigationMenuDemo({ onNavigate, currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const handleNavigation = (page) => {
    onNavigate?.(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <button onClick={() => handleNavigation('home')}>
          <img src={navbarData.logo.text} alt="Logo" className="cursor-pointer" />
        </button>
      </div>

      {/* Desktop Menu and CTA Section */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Navigation Menu */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => handleNavigation('home')} 
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'home' ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('restaurants')} 
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'restaurants' ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Restaurants
          </button>
          <button 
            onClick={() => handleNavigation('about')} 
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'about' ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNavigation('contact')} 
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'contact' ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <button onClick={() => handleNavigation('restaurants')}>
          <CTAButton cta={navbarData.cta} />
        </button>
      </div>

      {/* Mobile Menu Button and CTA */}
      <div className="flex md:hidden items-center space-x-4">
        <button onClick={() => handleNavigation('restaurants')}>
          <CTAButton cta={navbarData.cta} mobile />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden z-50 transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 space-y-4">
          <button onClick={() => handleNavigation('home')} className="block w-full text-left py-2 text-base font-medium hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => handleNavigation('restaurants')} className="block w-full text-left py-2 text-base font-medium hover:text-primary transition-colors">
            Restaurants
          </button>
          <button onClick={() => handleNavigation('about')} className="block w-full text-left py-2 text-base font-medium hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => handleNavigation('contact')} className="block w-full text-left py-2 text-base font-medium hover:text-primary transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

function MenuItem({ item }) {
  if (!item.hasDropdown) {
    return (
      <a href={item.href} className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
        {item.label}
      </a>
    )
  }

  return (
    <div className="group relative">
      <button className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
        {item.label}
      </button>
      <DropdownMenu item={item} />
    </div>
  )
}

function DropdownMenu({ item }) {
  const hasIconItems = item.iconItems && item.iconItems.length > 0;
  const hasRegularLinks = item.links && item.links.length > 0;
  const hasFeatured = item.featured;

  return (
    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md p-4 z-50 min-w-[300px]">
      {hasFeatured && hasRegularLinks ? (
        <div className="grid gap-2 lg:grid-cols-[.75fr_1fr]">
          <FeaturedSection featured={item.featured} />
          <div className="space-y-1">
            {item.links.map((link, index) => (
              <ListItem key={index} {...link} />
            ))}
          </div>
        </div>
      ) : hasRegularLinks ? (
        <div className="grid gap-2 grid-cols-2">
          {item.links.map((link, index) => (
            <ListItem key={index} {...link} />
          ))}
        </div>
      ) : hasIconItems ? (
        <div className="space-y-2 w-48">
          {item.iconItems.map((iconItem, index) => (
            <IconItem key={index} {...iconItem} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function FeaturedSection({ featured }) {
  return (
    <div className="row-span-3">
      <a
        href={featured.href}
        className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-primary/10 to-primary/20 p-4 no-underline select-none hover:from-primary/20 hover:to-primary/30 transition-all"
      >
        <div className="mb-2 text-lg font-medium text-primary">
          {featured.title}
        </div>
        <p className="text-gray-600 text-sm leading-tight">
          {featured.description}
        </p>
      </a>
    </div>
  )
}

function ListItem({ title, href, description }) {
  return (
    <a href={href} className="block p-2 hover:bg-gray-50 rounded transition-colors">
      <div className="text-sm font-medium text-gray-900">{title}</div>
      <p className="text-gray-600 text-sm leading-snug line-clamp-2">
        {description}
      </p>
    </a>
  )
}

function IconItem({ icon: Icon, label, href }) {
  return (
    <a href={href} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded transition-colors">
      <Icon size={16} className="text-primary" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}

function CTAButton({ cta, mobile = false }) {
  const Icon = cta.icon;
  
  return (
    <a 
      href={cta.href} 
      className={`flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium ${
        mobile ? 'text-sm px-3 py-1.5' : ''
      }`}
    >
      <Icon size={mobile ? 14 : 16} />
      {cta.text}
    </a>
  )
}

function MobileMenuItem({ item, index, isOpen, onToggle, onClose }) {
  if (!item.hasDropdown) {
    return (
      <a 
        href={item.href} 
        className="block py-2 text-base font-medium hover:text-primary transition-colors"
        onClick={onClose}
      >
        {item.label}
      </a>
    )
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-2 text-base font-medium hover:text-primary transition-colors"
      >
        {item.label}
        <span className={`transform transition-transform duration-200 ease-in-out ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}>
          ▼
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pl-4 pb-2 space-y-2">
          {item.featured && (
            <a 
              href={item.featured.href} 
              className="block py-1 text-sm text-primary font-medium transition-colors hover:text-primary/80"
              onClick={onClose}
            >
              {item.featured.title}
            </a>
          )}
          
          {item.links && item.links.map((link, linkIndex) => (
            <a 
              key={linkIndex}
              href={link.href} 
              className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors"
              onClick={onClose}
            >
              {link.title}
            </a>
          ))}
          
          {item.iconItems && item.iconItems.map((iconItem, iconIndex) => {
            const Icon = iconItem.icon;
            return (
              <a 
                key={iconIndex}
                href={iconItem.href} 
                className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
                onClick={onClose}
              >
                <Icon size={14} />
                {iconItem.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
