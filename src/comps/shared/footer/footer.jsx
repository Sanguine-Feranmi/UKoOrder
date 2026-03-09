import React from "react";
import logo from "/logo.png";
import appstore from "/app.png";
import playstore from "/play.png";

import {
  socialLinks,
  legalLinks,
  importantLinks
} from "./footerData";

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full bg-[#ECECEC] mt-10">

      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <img 
            src={logo} 
            className="w-[160px] cursor-pointer" 
            onClick={() => onNavigate?.('home')}
            alt="Logo"
          />

          <div className="flex gap-3 mt-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstore} className="w-[120px] cursor-pointer hover:opacity-80 transition" alt="App Store" />
            </a>
            <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
              <img src={playstore} className="w-[120px] cursor-pointer hover:opacity-80 transition" alt="Play Store" />
            </a>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Company # 490039-445, Registered with <br />
            House of companies.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">
            Get Exclusive Deals in your Inbox
          </h3>

          <div className="flex bg-gray-200 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-1 px-4 py-3 bg-transparent outline-none"
            />

            <button 
              type="button"
              className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition cursor-pointer"
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-2">
            we wont spam, read our email policy
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal Pages</h3>

          <ul className="space-y-3 text-sm">
            {legalLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-orange-500 cursor-pointer text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold mb-4">Important Links</h3>

          <ul className="space-y-3 text-sm">
            {importantLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    const pageMap = {
                      'Get help': 'contact',
                      'Add your restaurant': 'contact',
                      'Sign up to deliver': 'contact',
                      'Create a business account': 'contact'
                    };
                    onNavigate?.(pageMap[item.label] || 'home');
                  }}
                  className="hover:text-orange-500 cursor-pointer text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#001133] text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p>Order.uk Copyright 2024, All Rights Reserved.</p>

        <div className="flex gap-6 flex-wrap">
          <button onClick={() => onNavigate?.('contact')} className="hover:text-orange-400 transition cursor-pointer">Privacy Policy</button>
          <button onClick={() => onNavigate?.('contact')} className="hover:text-orange-400 transition cursor-pointer">Terms</button>
          <button onClick={() => onNavigate?.('contact')} className="hover:text-orange-400 transition cursor-pointer">Pricing</button>
          <button onClick={() => onNavigate?.('contact')} className="hover:text-orange-400 transition cursor-pointer text-sm">Do not sell or share my personal information</button>
        </div>

      </div>
    </footer>
  );
}
