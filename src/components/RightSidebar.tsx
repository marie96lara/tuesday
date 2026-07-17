import { TrendingUp } from 'lucide-react';

function Sparkline({ path, id }: { path: string; id: string }) {
  return (
    <div className="h-10 w-full opacity-80 my-1.5">
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
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="widget-card fade-up" style={{ padding: 16 }}>
      <div className="widget-card__header" style={{ marginBottom: 12 }}>
        <h3 className="widget-card__title">{title}</h3>
        {action}
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
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
            <span className="text-[11px] font-bold text-white">{symbol}</span>
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
      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-white/5 border border-white/10">
        <span className="text-[9px] font-bold text-[var(--accent-cyan)]">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-200 group-hover:text-white leading-snug">{headline}</p>
        <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{ago}</p>
      </div>
    </div>
  );
}

export default function RightSidebar() {
  return (
    <aside className="w-[300px] flex-shrink-0 px-3 py-3 flex flex-col gap-3 overflow-hidden">
      <WidgetCard
        title="Market Overview"
        action={
          <span className="flex items-center gap-1.5 text-[10px] text-green-400">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        }
      >
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
      </WidgetCard>

      <WidgetCard title="Latest News">
        <div className="space-y-3">
          <NewsRow icon="B" headline="Bitcoin breaks above $66K as ETF inflows surge" ago="2m ago" />
          <NewsRow icon="Au" headline="Gold holds steady as Fed signals rate cuts" ago="15m ago" />
          <NewsRow icon="Ai" headline="AI chips demand increases as Nvidia hits new high" ago="32m ago" />
        </div>
      </WidgetCard>
    </aside>
  );
}
