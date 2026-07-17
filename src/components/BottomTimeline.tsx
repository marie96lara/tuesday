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
  { icon: Zap, time: '07:42 PM', label: 'System Started', desc: 'Runtime initialized', active: true },
  { icon: Lightbulb, time: '07:43 PM', label: 'Memory Loaded', desc: 'Context restored', active: true },
  { icon: Mic, time: '07:44 PM', label: 'Voice Activated', desc: 'Listening enabled', active: true },
  { icon: TrendingUp, time: '07:47 PM', label: 'Bitcoin Alert', desc: 'Price target reached', active: true },
  { icon: FolderPlus, time: '07:49 PM', label: 'Project Created', desc: 'Phoenix workspace', active: false },
  { icon: Puzzle, time: '07:52 PM', label: 'Plugin Updated', desc: 'Market module v2.1', active: false },
  { icon: MessageSquare, time: '07:55 PM', label: 'Conversation Saved', desc: 'Session archived', active: false },
  { icon: TerminalSquare, time: '07:57 PM', label: 'Terminal Command', desc: 'deploy --env=prod', active: false },
];

export default function BottomTimeline() {
  return (
    <footer className="flex-shrink-0 px-6 py-4 z-50">
      <div className="glass-panel px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            Activity Feed
          </h3>
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            Last 8 events
          </span>
        </div>

        <div className="flex items-stretch gap-2 overflow-x-auto pb-1">
          {timelineEvents.map((e) => (
            <div
              key={e.label}
              className={`feed-item flex-shrink-0 min-w-[180px] ${
                e.active ? '' : 'feed-item--muted'
              }`}
            >
              <div className="feed-item__icon">
                <e.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-white truncate">{e.label}</p>
                  <span className="text-[10px] text-[var(--text-muted)] flex-shrink-0">{e.time}</span>
                </div>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 truncate">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
