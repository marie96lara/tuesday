import { Bell, Settings, ChevronDown } from 'lucide-react';

export default function TopHeader() {
  return (
    <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#050b14] z-50 flex-shrink-0">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full border-2 border-[#00a3ff] flex items-center justify-center">
          <span className="text-xs font-bold text-[#00a3ff]">A</span>
        </div>
        <h1 className="text-lg font-semibold tracking-widest uppercase text-white">Tuesday OS</h1>
      </div>

      <div className="flex items-center space-x-2 text-xs text-gray-400">
        <span className="w-2 h-2 rounded-full bg-[#00a3ff] animate-pulse" />
        <span className="text-[#00a3ff] uppercase font-medium">Online</span>
        <span className="px-2 border-l border-white/10 uppercase">Idle</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-md cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-xs text-gray-200">GPT-4o</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        <button className="relative text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <button className="text-gray-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>

        <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}
