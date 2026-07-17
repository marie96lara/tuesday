import { MessageSquare, Lightbulb, Folder, FileText, BookOpen, Puzzle, Sparkles, History, Sun, Maximize2, ArrowLeftRight } from 'lucide-react';

const navItems = [
  { icon: MessageSquare, label: 'Chat', active: true },
  { icon: Lightbulb, label: 'Memory', active: false },
  { icon: Folder, label: 'Projects', active: false },
  { icon: FileText, label: 'Files', active: false },
  { icon: BookOpen, label: 'Knowledge', active: false },
  { icon: Puzzle, label: 'Plugins', active: false },
  { icon: Sparkles, label: 'Skills', active: false },
  { icon: History, label: 'History', active: false },
];

export default function LeftSidebar() {
  return (
    <aside className="w-[220px] flex-shrink-0 bg-[#050b14]/50 border-r border-white/5 flex flex-col p-4">
      <div className="flex-1 flex flex-col" style={{ background: 'rgba(13, 20, 30, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12 }}>
        <div className="p-4 border-b border-white/5 flex items-center">
          <div className="flex flex-col space-y-1 cursor-pointer">
            <span className="w-5 h-px bg-gray-500" />
            <span className="w-5 h-px bg-gray-500" />
            <span className="w-5 h-px bg-gray-500" />
          </div>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-4 px-3 py-3 rounded-lg text-sm transition-colors ${
                item.active
                  ? 'bg-[#00a3ff]/10 text-white border-l-2 border-[#00a3ff]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-[#00a3ff]' : ''}`} />
              <span className={item.active ? 'font-medium' : ''}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 border-t border-white/5 flex items-center justify-between text-gray-500">
          <button className="hover:text-white transition-colors"><Sun className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors"><Maximize2 className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors"><ArrowLeftRight className="w-5 h-5" /></button>
        </div>
      </div>
    </aside>
  );
}
