import {
  BarChart2,
  Book,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Radio,
  Settings,
  Shield,
  Timer,
  User,
} from 'lucide-react';
import React from 'react';

export default function Sidebar() {
  return (
    <>
      {/* TopNavBar (Mobile) */}
      <header className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-surface border-b border-outline-variant">
        <div className="font-headline-md text-2xl font-bold text-primary">
          E-Testing System
        </div>
        <div className="flex items-center gap-6">
          <Timer className="w-5 h-5 text-on-surface-variant active:opacity-80 transition-all cursor-pointer hover:bg-surface-container-highest rounded" />
          <Shield className="w-5 h-5 text-on-surface-variant active:opacity-80 transition-all cursor-pointer hover:bg-surface-container-highest rounded" />
          <User className="w-5 h-5 text-on-surface-variant active:opacity-80 transition-all cursor-pointer hover:bg-surface-container-highest rounded" />
        </div>
      </header>

      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[280px] p-4 z-40 bg-surface-container border-r border-outline-variant">
        <div className="mb-8 flex items-center gap-2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKzeodpoxSFepDbqLlp7qGzdit-N-pb-eRDkQC10MmDtvUbUvTnfzSSd_NjiBGu6Iog-ErDfKvIKrwomlWdcagHk63n3xKjg2QGH414cMs5YsLN6lCOVMKrM2owwYlzepjwTUzNt45XVgaJEmHI9SaWipydqXGNcmLB0f2vOUBHvlOp_kZEq0yqvfmwkh3piCVo8OfktPb0mMTv8LniNyNs8GenqwJJPJJ9Hda8sBMuW-cPw3S53122UvMemC58u8OpsFKHAnfNg0"
            alt="User Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-headline-md text-2xl font-bold text-primary">
              Admin Control
            </h2>
            <p className="text-xs text-on-surface-variant flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>{' '}
              Proctoring Active
            </p>
          </div>
        </div>

        <button className="w-full bg-primary text-on-primary rounded-xl py-2 mb-8 text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center justify-center gap-2 font-medium">
          <PlusCircle className="w-4 h-4" /> Create Exam
        </button>

        <ul className="flex flex-col gap-1 flex-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold transition-all focus:ring-2 focus:ring-primary"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all focus:ring-2 focus:ring-primary"
            >
              <Book className="w-5 h-5" />
              <span>Subjects</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all focus:ring-2 focus:ring-primary"
            >
              <Radio className="w-5 h-5" />
              <span>Live Exams</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all focus:ring-2 focus:ring-primary"
            >
              <BarChart2 className="w-5 h-5" />
              <span>Results</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all focus:ring-2 focus:ring-primary"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>

        <div className="mt-auto border-t border-outline-variant pt-2 flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all focus:ring-2 focus:ring-primary"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Support</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-all focus:ring-2 focus:ring-primary"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </>
  );
}
