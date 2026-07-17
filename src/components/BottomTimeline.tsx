import {
  Zap,
  Lightbulb,
  Mic,
  TrendingUp,
  FolderPlus,
  Puzzle,
  MessageSquare,
  TerminalSquare,
} from 'lucide-react';

const timelineEvents = [
  { icon: Zap, time: '07:42', label: 'System Started', active: true },
  { icon: Lightbulb, time: '07:43', label: 'Memory Loaded', active: true },
  { icon: Mic, time: '07:44', label: 'Voice Activated', active: true },
  { icon: TrendingUp, time: '07:47', label: 'Bitcoin Alert', active: true },
  { icon: FolderPlus, time: '07:49', label: 'Project Created', active: false },
  { icon: Puzzle, time: '07:52', label: 'Plugin Updated', active: false },
  { icon: MessageSquare, time: '07:55', label: 'Conversation Saved', active: false },
  { icon: TerminalSquare, time: '07:57', label: 'Terminal Command', active: false },
];

export default function BottomTimeline() {
  return (
    <footer className="flex-shrink-0 px-4 pb-3 z-50">
      <div className="glass-panel px-4 py-2.5">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] flex-shrink-0 pr-2 border-r border-white/10">
            Activity
          </span>
          {timelineEvents.map((e) => (
            <div
              key={e.label}
              className={`feed-item flex-shrink-0 ${e.active ? '' : 'feed-item--muted'}`}
              style={{ padding: '4px 8px', gap: 8 }}
            >
              <div className="feed-item__icon" style={{ width: 24, height: 24 }}>
                <e.icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <p className="text-[11px] font-medium text-white whitespace-nowrap">{e.label}</p>
                <span className="text-[10px] text-[var(--text-muted)] whitespace-nowrap">
                  {e.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
