export default function TopHeader() {
  return (
    <header className="h-14 flex-shrink-0 flex items-center justify-center bg-[#050b14] z-50">
      <div className="flex items-center gap-2.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
        <span className="font-display font-semibold tracking-[0.22em] uppercase text-white">
          Tuesday Core
        </span>
        <span className="text-[var(--text-muted)]">•</span>
        <span className="text-[var(--accent-cyan)] uppercase font-medium tracking-wider">
          Ready
        </span>
      </div>
    </header>
  );
}
