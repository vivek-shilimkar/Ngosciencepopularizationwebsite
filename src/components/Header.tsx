import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/cef7b5c3dfb09b5bf3aa9b00c25089ef6b74279f.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "मुख्यपृष्ठ", href: "#home" },
    { name: "आमच्याबद्दल", href: "#about" },
    { name: "उपक्रम", href: "#activities" },
    { name: "संपर्क", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <h1 className="font-bold text-blue-600">
              मराठी विज्ञान परिषद पुणे विभाग
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}