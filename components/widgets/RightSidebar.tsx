const glassPanel = {
  background: 'rgba(13, 20, 30, 0.6)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: 12,
};

function SparklineBtc() {
  return (
    <div className="h-16 w-full opacity-70 my-2">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
        <defs>
          <linearGradient id="btc-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00a3ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00a3ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 22 Q 10 8, 20 18 T 40 12 T 60 20 T 80 8 T 100 14" fill="none" stroke="#00a3ff" strokeWidth="1.5" />
        <path d="M0 22 Q 10 8, 20 18 T 40 12 T 60 20 T 80 8 T 100 14 L 100 30 L 0 30 Z" fill="url(#btc-grad)" />
      </svg>
    </div>
  );
}

function SparklineGold() {
  return (
    <div className="h-16 w-full opacity-70 my-2">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
        <defs>
          <linearGradient id="gold-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00a3ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00a3ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 18 Q 15 26, 30 15 T 50 22 T 70 12 T 100 18" fill="none" stroke="#00a3ff" strokeWidth="1.5" />
        <path d="M0 18 Q 15 26, 30 15 T 50 22 T 70 12 T 100 18 L 100 30 L 0 30 Z" fill="url(#gold-grad)" />
      </svg>
    </div>
  );
}

export default function RightSidebar() {
  return (
    <aside className="w-[300px] flex-shrink-0 bg-[#050b14]/50 border-l border-white/5 flex flex-col p-4 space-y-3 overflow-y-auto">
      {/* Market Overview */}
      <section style={glassPanel} className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Market Overview</h3>
          <span className="flex items-center text-[10px] text-green-500 space-x-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span>Live</span>
          </span>
        </div>

        {/* Bitcoin */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(249, 115, 22, 0.1)', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                <span className="text-orange-500 font-bold text-xs">₿</span>
              </div>
              <div>
                <p className="text-xs font-medium text-white">Bitcoin</p>
                <p className="text-[10px] text-gray-500">BTC / USDT</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">$66,842.21</p>
              <p className="text-[10px] text-green-500">+2.35% ↑</p>
            </div>
          </div>
          <SparklineBtc />
        </div>

        {/* Gold */}
        <div className="pt-2 border-t border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                <span className="text-yellow-500 font-bold text-xs">Au</span>
              </div>
              <div>
                <p className="text-xs font-medium text-white">Gold</p>
                <p className="text-[10px] text-gray-500">XAU / USD</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">$2,392.45</p>
              <p className="text-[10px] text-green-500">+1.18% ↑</p>
            </div>
          </div>
          <SparklineGold />
        </div>
      </section>

      {/* Latest News */}
      <section style={glassPanel} className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Latest News</h3>
          <a href="#" className="text-[10px] text-[#00a3ff] hover:underline">View All</a>
        </div>
        <div className="space-y-4">
          {[
            { icon: '₿', bg: 'rgba(59,130,246,0.1)', headline: 'Bitcoin breaks above $66K as ETF inflows surge', ago: '2m ago' },
            { icon: 'Au', bg: 'rgba(234,179,8,0.1)', headline: 'Gold holds steady as Fed signals rate cuts', ago: '15m ago' },
            { icon: '▲', bg: 'rgba(0,163,255,0.1)', headline: 'AI chips demand increases as Nvidia hits new high', ago: '32m ago', neon: true },
          ].map((n) => (
            <div key={n.headline} className="flex items-start space-x-3 group cursor-pointer">
              <div className="w-7 h-7 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ background: n.bg }}>
                <span className={`text-[10px] font-bold ${n.neon ? 'text-[#00a3ff]' : ''}`}>{n.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-200 group-hover:text-white leading-tight">{n.headline}</p>
                <p className="text-[9px] text-gray-500 mt-1">{n.ago}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Schedule */}
      <section style={glassPanel} className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Today's Schedule</h3>
          <a href="#" className="text-[10px] text-[#00a3ff] hover:underline">View All</a>
        </div>
        <ul className="space-y-3 text-xs">
          {[
            { time: '07:00 PM', label: 'Team Standup', active: true },
            { time: '08:30 PM', label: 'Market Analysis', active: true },
            { time: '10:00 PM', label: 'Project Phoenix Review', active: false },
          ].map((s) => (
            <li key={s.time} className="flex items-center space-x-3">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.active ? 'bg-[#00a3ff]' : 'bg-gray-600'}`} />
              <span className="text-gray-400 w-16 flex-shrink-0">{s.time}</span>
              <span className="font-medium text-white">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Current Tasks */}
      <section style={glassPanel} className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Current Tasks</h3>
          <a href="#" className="text-[10px] text-[#00a3ff] hover:underline">View All</a>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Market Analysis Report', pct: 65 },
            { label: 'Project Phoenix Development', pct: 40 },
            { label: 'AI Model Training', pct: 25 },
          ].map((t) => (
            <div key={t.label}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-gray-300">{t.label}</span>
                <span className="text-[#00a3ff]">{t.pct}%</span>
              </div>
              <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="h-full rounded-full bg-[#00a3ff]" style={{ width: `${t.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
