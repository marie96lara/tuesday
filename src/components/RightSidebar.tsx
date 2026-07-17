import { TrendingUp, Newspaper, CalendarClock, ListChecks } from 'lucide-react';

function Sparkline({ path, id }: { path: string; id: string }) {
  return (
    <div className="h-14 w-full opacity-80 my-2">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="#00d4ff" strokeWidth="1.5" />
        <path d={`${path} L 100 30 L 0 30 Z`} fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function WidgetCard({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="widget-card fade-up">
      <div className="widget-card__header">
        <h3 className="widget-card__title">{title}</h3>
        {action && (
          <a href="#" className="widget-card__link">
            {action}
          </a>
        )}
      </div>
      {children}
    </section>
  );
}

function AssetRow({
  symbol,
  name,
  pair,
  price,
  change,
  sparkline,
  gradientId,
}: {
  symbol: string;
  name: string;
  pair: string;
  price: string;
  change: string;
  sparkline: string;
  gradientId: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
            <span className="text-xs font-bold text-white">{symbol}</span>
          </div>
          <div>
            <p className="text-xs font-medium text-white">{name}</p>
            <p className="text-[10px] text-[var(--text-muted)]">{pair}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">{price}</p>
          <p className="text-[10px] text-green-400 flex items-center justify-end gap-1">
            <TrendingUp className="w-3 h-3" />
            {change}
          </p>
        </div>
      </div>
      <Sparkline path={sparkline} id={gradientId} />
    </div>
  );
}

function NewsRow({ icon, headline, ago }: { icon: string; headline: string; ago: string }) {
  return (
    <div className="flex items-start gap-3 group cursor-pointer">
      <div className="w-7 h-7 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-white/5 border border-white/10">
        <span className="text-[10px] font-bold text-[var(--accent-cyan)]">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-200 group-hover:text-white leading-snug">{headline}</p>
        <p className="text-[10px] text-[var(--text-muted)] mt-1">{ago}</p>
      </div>
    </div>
  );
}

function ScheduleRow({ time, label, active }: { time: string; label: string; active: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          active ? 'bg-[var(--accent-cyan)]' : 'bg-gray-600'
        }`}
      />
      <span className="text-[var(--text-muted)] w-16 flex-shrink-0 text-xs">{time}</span>
      <span className="font-medium text-white text-xs">{label}</span>
    </li>
  );
}

function TaskRow({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-1.5">
        <span className="text-gray-300">{label}</span>
        <span className="text-[var(--accent-cyan)] font-medium">{pct}%</span>
      </div>
      <div className="w-full h-1 rounded-full overflow-hidden bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00a3ff]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function RightSidebar() {
  return (
    <aside className="w-[320px] flex-shrink-0 px-4 py-4 flex flex-col gap-3 overflow-y-auto">
      <WidgetCard
        title="Market Overview"
        action={
          <span className="flex items-center gap-1.5 text-[10px] text-green-400">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        }
      >
        <div className="space-y-3">
          <AssetRow
            symbol="B"
            name="Bitcoin"
            pair="BTC / USDT"
            price="$66,842.21"
            change="+2.35%"
            sparkline="M0 22 Q 10 8, 20 18 T 40 12 T 60 20 T 80 8 T 100 14"
            gradientId="btc-grad"
          />
          <div className="pt-2 border-t border-white/5">
            <AssetRow
              symbol="Au"
              name="Gold"
              pair="XAU / USD"
              price="$2,392.45"
              change="+1.18%"
              sparkline="M0 18 Q 15 26, 30 15 T 50 22 T 70 12 T 100 18"
              gradientId="gold-grad"
            />
          </div>
        </div>
      </WidgetCard>

      <WidgetCard title="Latest News" action="View All">
        <div className="space-y-4">
          <NewsRow icon="B" headline="Bitcoin breaks above $66K as ETF inflows surge" ago="2m ago" />
          <NewsRow icon="Au" headline="Gold holds steady as Fed signals rate cuts" ago="15m ago" />
          <NewsRow icon="Ai" headline="AI chips demand increases as Nvidia hits new high" ago="32m ago" />
        </div>
      </WidgetCard>

      <WidgetCard title="Today's Schedule" action="View All">
        <ul className="space-y-3">
          <ScheduleRow time="07:00 PM" label="Team Standup" active />
          <ScheduleRow time="08:30 PM" label="Market Analysis" active />
          <ScheduleRow time="10:00 PM" label="Project Phoenix Review" active={false} />
        </ul>
      </WidgetCard>

      <WidgetCard title="Current Tasks" action="View All">
        <div className="space-y-4">
          <TaskRow label="Market Analysis Report" pct={65} />
          <TaskRow label="Project Phoenix Development" pct={40} />
          <TaskRow label="AI Model Training" pct={25} />
        </div>
      </WidgetCard>

      <div className="flex items-center justify-around pt-2 text-[var(--text-muted)]">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
          <Newspaper className="w-3.5 h-3.5" /> Feed
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
          <CalendarClock className="w-3.5 h-3.5" /> Agenda
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
          <ListChecks className="w-3.5 h-3.5" /> Tasks
        </div>
      </div>
    </aside>
  );
}
