import { ArrowRight, Mic } from 'lucide-react';

const waveDelays = [0.1, 0.3, 0.2, 0.5, 0.4, 0.6, 0.1, 0.8, 0.2];
const waveOpacities = ['60', '100', '80', '100', '40', '60', '100', '30', '100'];

export default function MainContent() {
  return (
    <main className="flex-1 relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(0, 163, 255, 0.07)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-light tracking-tight text-white">
            Good evening, <span className="font-semibold">Amarjot</span>
          </h2>
          <p className="text-gray-400 font-light">How can I help you today?</p>
        </div>

        <div className="mt-10 w-full max-w-xl px-0">
          <div
            className="p-4 flex items-center space-x-4"
            style={{
              background: 'rgba(13, 20, 30, 0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 12,
              boxShadow: '0 0 15px rgba(0, 163, 255, 0.3)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0, 163, 255, 0.2)', border: '1px solid rgba(0, 163, 255, 0.4)' }}
            >
              <Mic className="w-6 h-6 text-[#00a3ff]" />
            </div>

            <div className="flex-1 flex items-end space-x-1.5 h-6">
              {waveDelays.map((delay, i) => (
                <div
                  key={i}
                  className={`w-1 bg-[#00a3ff]/${waveOpacities[i]} rounded-full waveform-bar`}
                  style={{ animationDelay: `${delay}s`, backgroundColor: `rgba(0, 163, 255, ${parseInt(waveOpacities[i]) / 100})` }}
                />
              ))}
            </div>

            <div className="flex-1 border-b border-white/10 pb-1">
              <span className="text-sm text-gray-500 italic">
                Tap to speak...{' '}
                <span className="text-[#00a3ff]">I'm listening...</span>
              </span>
            </div>

            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
