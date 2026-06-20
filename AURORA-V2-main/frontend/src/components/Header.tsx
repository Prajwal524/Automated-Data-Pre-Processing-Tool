import { BarChart3, Sparkles, Code } from 'lucide-react';

interface HeaderProps {
  onToggleMetrics: () => void;
  onToggleIDE: () => void;
}

export default function Header({ onToggleMetrics, onToggleIDE }: HeaderProps) {
  return (
    <header className="glass-card mx-2 sm:mx-4 mt-4 px-3 sm:px-6 py-3 sm:py-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-brand-black" />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-primary">AURORA</h1>
            <p className="text-[10px] sm:text-xs text-brand-cool-gray">Intelligent Data Preprocessing</p>
          </div>
        </div>

        {/* Status & Actions */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {/* Live Status */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-success/10 rounded-lg border border-success/30">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-success">Online</span>
          </div>

          {/* Custom Script IDE */}
          <button
            onClick={onToggleIDE}
            className="btn-secondary flex items-center gap-2 border-warning/30 hover:border-warning/60 text-warning hover:text-warning text-xs sm:text-sm px-2 sm:px-4"
          >
            <Code className="w-4 h-4" />
            <span className="hidden sm:inline">Custom Script</span>
          </button>

          {/* Metrics Toggle */}
          <button
            onClick={onToggleMetrics}
            className="btn-secondary flex items-center gap-2 text-xs sm:text-sm px-2 sm:px-4"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Performance Metrics</span>
          </button>
        </div>
      </div>
    </header>
  );
}