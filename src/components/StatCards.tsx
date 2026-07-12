import { AlertTriangle, FileText, TrendingUp, User } from 'lucide-react';
import React from 'react';

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Stat Card 1 */}
      <div className="bg-surface-container p-6 rounded-xl border border-outline-variant flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
            Total Exams
          </span>
          <div className="bg-primary/10 p-2 rounded">
            <FileText className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="text-5xl font-bold text-on-surface">142</div>
        <div className="font-mono text-sm text-primary mt-2 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" /> +12% this month
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className="bg-surface-container p-6 rounded-xl border border-outline-variant flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/10 rounded-full blur-xl"></div>
        <div className="flex justify-between items-start mb-2 relative z-10">
          <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
            Students Online
          </span>
          <div className="bg-error/10 p-2 rounded">
            <User className="w-5 h-5 text-error" />
          </div>
        </div>
        <div className="text-5xl font-bold text-on-surface relative z-10">
          845
        </div>
        <div className="font-mono text-sm text-error mt-2 flex items-center gap-2 relative z-10">
          <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>{' '}
          Live Monitoring
        </div>
      </div>

      {/* Stat Card 3 */}
      <div className="bg-surface-container p-6 rounded-xl border border-outline-variant flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
            Reports
          </span>
          <div className="bg-tertiary/10 p-2 rounded">
            <AlertTriangle className="w-5 h-5 text-tertiary" />
          </div>
        </div>
        <div className="text-5xl font-bold text-on-surface">3</div>
        <div className="font-mono text-sm text-tertiary mt-2">
          Requires Review
        </div>
      </div>
    </div>
  );
}
