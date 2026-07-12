import { Lock } from 'lucide-react';
import React from 'react';

export default function SettingsPanel() {
  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant p-6 h-full">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
        <h3 className="text-xl text-on-surface font-semibold">ตั้งค่าระบบ</h3>
      </div>
      <div className="space-y-6">
        {/* Admin Password */}
        <div>
          <label className="block font-mono text-sm text-on-surface-variant mb-1">
            Change Admin Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input
              type="password"
              placeholder="New password"
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg pl-10 pr-3 py-2 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
            />
          </div>
          <button className="mt-2 w-full bg-surface-variant text-on-surface-variant hover:text-on-surface hover:bg-outline-variant transition-colors py-2 rounded-lg text-xs font-medium border border-outline-variant">
            Update Password
          </button>
        </div>

        {/* Theme Colors */}
        <div>
          <label className="block font-mono text-sm text-on-surface-variant mb-1">
            Web Theme Colors
          </label>
          <div className="flex gap-2">
            <button
              className="w-8 h-8 rounded-full bg-[#adc6ff] border-2 border-surface focus:outline-none focus:ring-2 focus:ring-[#adc6ff] focus:ring-offset-2 ring-offset-background"
              title="Primary Blue"
            ></button>
            <button
              className="w-8 h-8 rounded-full bg-[#dae2fd] border-2 border-surface focus:outline-none focus:ring-2 focus:ring-[#dae2fd] focus:ring-offset-2 ring-offset-background"
              title="Light Slate"
            ></button>
            <button
              className="w-8 h-8 rounded-full bg-[#10b981] border-2 border-surface focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 ring-offset-background"
              title="Emerald"
            ></button>
            <button
              className="w-8 h-8 rounded-full bg-[#8b5cf6] border-2 border-surface focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 ring-offset-background"
              title="Purple"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
