/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SettingsPanel from './components/SettingsPanel';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import SubjectList from './components/SubjectList';
import UploadZone from './components/UploadZone';

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[280px] mt-16 md:mt-0 flex flex-col min-h-screen">
        <div className="flex-1 p-4 md:p-10">
          {/* Header */}
          <div className="flex justify-between items-end mb-8 pb-2 border-b border-outline-variant">
            <div>
              <h1 className="text-2xl md:text-3xl text-on-surface font-bold">
                ระบบจัดการการสอบ (Admin)
              </h1>
              <p className="text-base text-on-surface-variant mt-1">
                Overview of exams and student lists.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="font-mono text-sm bg-surface-container-high px-3 py-1 rounded text-primary border border-outline-variant">
                SERVER: SECURE
              </span>
            </div>
          </div>

          <StatCards />

          {/* Bento Grid Layout for Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-8 flex flex-col gap-6">
              <SubjectList />
              <UploadZone title="อัปโหลดรายชื่อนักเรียน" type="student" />
              <UploadZone title="นำเข้าข้อสอบ (Import Questions)" type="question" />
            </div>

            <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
              <SettingsPanel />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4 md:p-10 pt-0 mt-auto">
          <div className="border-t border-outline-variant pt-2 flex justify-between items-center">
            <p className="font-mono text-sm text-on-surface-variant">
              © 2024 E-Testing Admin Portal
            </p>
            <p className="font-mono text-sm text-on-surface-variant">
              Developed by System Admin Team
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
