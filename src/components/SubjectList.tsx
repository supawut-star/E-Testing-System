import { Edit2, PlusCircle, Shuffle } from 'lucide-react';
import React from 'react';

export default function SubjectList() {
  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant p-6">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
        <h3 className="text-xl text-on-surface font-semibold">จัดการวิชาสอบ</h3>
        <button className="font-mono text-sm text-primary hover:text-primary-container transition-colors flex items-center gap-1">
          <PlusCircle className="w-4 h-4" /> Add Subject
        </button>
      </div>
      <div className="space-y-1">
        {/* Subject Item */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
              CS
            </div>
            <div>
              <div className="text-base text-on-surface font-semibold">
                Computer Science 101
              </div>
              <div className="text-xs text-on-surface-variant">
                ID: SUBJ-CS101 • 45 Questions
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="p-2 rounded hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
              title="Randomize"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
              title="Manage"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Subject Item */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
              MA
            </div>
            <div>
              <div className="text-base text-on-surface font-semibold">
                Advanced Calculus
              </div>
              <div className="text-xs text-on-surface-variant">
                ID: SUBJ-MA204 • 30 Questions
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="p-2 rounded hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
              title="Randomize"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
              title="Manage"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
