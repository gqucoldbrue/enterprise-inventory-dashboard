import React from 'react';
import { Inter } from 'next/font/google';
import { Bell, Settings, HelpCircle } from 'lucide-react'; // Updated icons to match your page.js

const inter = Inter({ subsets: ['latin'] });

const DashboardLayout = ({ children }) => {
  return (
    <div className={`min-h-screen bg-background ${inter.className}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Inventory Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Settings size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <HelpCircle size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Studio GQ. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;