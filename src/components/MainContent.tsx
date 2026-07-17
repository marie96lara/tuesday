import { ArrowRight, Mic } from 'lucide-react';
import OrbCanvas from './OrbCanvas';

const waveDelays = [0.1, 0.3, 0.2, 0.5, 0.4, 0.6, 0.1, 0.8, 0.2];
const waveOpacities = [60, 100, 80, 100, 40, 60, 100, 30, 100];

export default function MainContent() {
  return (
    <main className="flex-1 relative flex flex-col items-center justify-center overflow-hidden px-8">
      {/* Ambient cyan glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[140px]"
          style={{ background: 'rgba(0, 212, 255, 0.06)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center fade-up -mt-10">
        <OrbCanvas />

        <div className="-mt-4 text-center space-y-1">
          <h2 className="font-display text-[30px] font-light tracking-tight text-white leading-tight">
            Good evening.
          </h2>
          <h3 className="font-display text-[30px] font-light tracking-tight text-white leading-tight">
            Welcome back.
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] font-light mt-2">
            What would you like to accomplish today?
          </p>
        </div>

        <div className="mt-8 w-full max-w-xl">
          <div className="glass-panel glass-panel--accent p-3.5 flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(0, 212, 255, 0.14)',
                border: '1px solid rgba(0, 212, 255, 0.35)',
              }}
            >
              <Mic className="w-5 h-5 text-[var(--accent-cyan)]" />
            </div>

            <div className="flex-1 flex items-end gap-1.5 h-6">
              {waveDelays.map((delay, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full waveform-bar"
                  style={{
                    animationDelay: `${delay}s`,
                    backgroundColor: `rgba(0, 212, 255, ${waveOpacities[i] / 100})`,
                  }}
                />
              ))}
            </div>

            <div className="flex-1 border-b border-white/10 pb-1">
              <span className="text-sm text-[var(--text-muted)] italic">
                Tap to speak...{' '}
                <span className="text-[var(--accent-cyan)] not-italic">I'm listening...</span>
              </span>
            </div>

            <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 border border-white/10">
              <ArrowRight className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
