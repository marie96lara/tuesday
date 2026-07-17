'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import OrbCanvas from '@/components/core/OrbCanvas';
import MicIndicator from '@/components/voice/MicIndicator';

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking';

const stateText: Record<VoiceState, { line1: string; line2: string }> = {
  idle: { line1: '', line2: 'How can I help?' },
  listening: { line1: 'Listening...', line2: 'How can I help?' },
  thinking: { line1: 'Thinking...', line2: '' },
  speaking: { line1: 'Speaking...', line2: '' },
};

export default function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<VoiceState>('listening');

  // Open shortly after mount so the spring animation is visible
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Cycle through states for demonstration. Future states can be wired to
  // real voice pipelines without changing the structure below.
  useEffect(() => {
    if (!open) return;
    const cycle: VoiceState[] = ['listening', 'thinking', 'speaking', 'listening'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % cycle.length;
      setState(cycle[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, [open]);

  const { line1, line2 } = stateText[state];

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark blurred overlay */}
      {open && (
        <div
          className="voice-overlay absolute inset-0"
          style={{
            background: 'rgba(3, 8, 16, 0.72)',
            backdropFilter: 'blur(18px) saturate(120%)',
            WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Floating glass popup */}
      {open && (
        <div
          className="voice-popup absolute left-1/2 bottom-16 flex flex-col items-center"
          style={{
            transform: 'translateX(-50%)',
          }}
        >
          {/* Soft cyan glow behind the popup */}
          <div
            className="voice-glow absolute -inset-10 rounded-[40px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 163, 255, 0.18) 0%, rgba(0, 163, 255, 0) 70%)',
              filter: 'blur(24px)',
            }}
          />

          {/* Glass card */}
          <div
            className="relative flex flex-col items-center px-12 py-10"
            style={{
              width: 520,
              background: 'rgba(13, 20, 30, 0.55)',
              backdropFilter: 'blur(28px) saturate(140%)',
              WebkitBackdropFilter: 'blur(28px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 32,
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(0, 163, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}
              aria-label="Close voice assistant"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Tuesday AI Orb — reused exactly as-is from the dashboard */}
            <div className="pointer-events-none">
              <OrbCanvas />
            </div>

            {/* State text */}
            <div className="mt-2 h-16 flex flex-col items-center justify-center text-center">
              {line1 && (
                <p
                  key={`l1-${state}`}
                  className="voice-text text-lg font-light tracking-wide text-white"
                >
                  {line1}
                </p>
              )}
              {line2 && (
                <p
                  key={`l2-${state}`}
                  className="voice-text text-sm font-light text-gray-400 mt-1.5"
                >
                  {line2}
                </p>
              )}
            </div>

            {/* Minimal mic indicator */}
            <div className="mt-4">
              <MicIndicator state={state} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
