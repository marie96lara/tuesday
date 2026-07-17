import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#050b14] text-slate-200 gap-6">
      <h1 className="text-2xl font-light tracking-widest uppercase text-white">Tuesday OS</h1>
      <Link
        href="/voice"
        className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
        style={{
          background: 'rgba(0, 163, 255, 0.12)',
          border: '1px solid rgba(0, 163, 255, 0.35)',
          boxShadow: '0 0 24px rgba(0, 163, 255, 0.2)',
        }}
      >
        Open Voice Assistant
      </Link>
    </div>
  );
}
