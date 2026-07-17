import { Zap, Lightbulb, Mic, TrendingUp, Folder, Image, MessageSquare, Terminal } from 'lucide-react';

const timelineEvents = [
  { icon: Zap, time: '07:42 PM', label: 'System Started', active: true },
  { icon: Lightbulb, time: '07:43 PM', label: 'Memory Loaded', active: true },
  { icon: Mic, time: '07:44 PM', label: 'Voice Activated', active: true },
  { icon: TrendingUp, time: '07:47 PM', label: 'Bitcoin Alert', active: true },
  { icon: Folder, time: '07:49 PM', label: 'Project Created', active: false },
  { icon: Image, time: '07:52 PM', label: 'Plugin Updated', active: false },
  { icon: MessageSquare, time: '07:55 PM', label: 'Conversation Saved', active: false },
  { icon: Terminal, time: '07:57 PM', label: 'Terminal Command', active: false },
];

export default function BottomTimeline() {
  return (
    <footer className="h-28 border-t border-white/5 bg-[#050b14]/80 px-8 py-3 z-50 flex-shrink-0">
      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Activity Timeline</h3>
      <div className="relative flex items-center justify-between px-6">
        <div className="absolute top-5 left-0 right-0 h-px bg-white/10" />
        <div className="absolute top-5 left-0 w-2/3 h-px" style={{ background: 'rgba(0, 163, 255, 0.4)' }} />

        {timelineEvents.map((e) => (
          <div key={e.label} className="relative z-10 flex flex-col items-center group">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center mb-1 transition-transform hover:scale-110 ${
                e.active ? 'text-[#00a3ff]' : 'text-gray-400'
              }`}
              style={{
                background: 'rgba(13, 20, 30, 0.6)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${e.active ? 'rgba(0, 163, 255, 0.4)' : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              <e.icon className="w-4 h-4" />
            </div>
            <span className="text-[9px] text-gray-400">{e.time}</span>
            <span className="text-[10px] font-medium text-white whitespace-nowrap">{e.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
