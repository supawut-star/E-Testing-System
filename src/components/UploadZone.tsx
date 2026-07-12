import { Download, HelpCircle, UploadCloud } from 'lucide-react';
import React from 'react';

type UploadZoneProps = {
  title: string;
  type: 'student' | 'question';
};

export default function UploadZone({ title, type }: UploadZoneProps) {
  const Icon = type === 'student' ? UploadCloud : HelpCircle;
  const description =
    type === 'student'
      ? 'Drag & drop CSV/Excel files here'
      : 'Drag & drop Question CSV/Excel files here';
  const subtext =
    type === 'student'
      ? 'or click to browse'
      : 'Columns: Question, Type, Options A-E, Correct Answer';

  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant p-6">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
        <h3 className="text-xl text-on-surface font-semibold">{title}</h3>
        {type === 'question' && (
          <button className="font-mono text-sm text-primary hover:text-primary-container transition-colors flex items-center gap-1">
            <Download className="w-4 h-4" /> ดาวน์โหลดเทมเพลต
          </button>
        )}
        {type === 'student' && (
          <button className="font-mono text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
            <Download className="w-4 h-4" /> ดาวน์โหลดเทมเพลต
          </button>
        )}
      </div>
      <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-surface-container-high transition-colors cursor-pointer group">
        <Icon className="w-10 h-10 text-outline group-hover:text-primary transition-colors mb-2" />
        <div className="text-base text-on-surface font-semibold">
          {description}
        </div>
        <div className="text-xs text-on-surface-variant mt-1">{subtext}</div>
      </div>
    </div>
  );
}
