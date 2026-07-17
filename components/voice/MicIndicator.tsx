'use client';

import { Mic } from 'lucide-react';

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking';

export default function MicIndicator({ state }: { state: VoiceState }) {
  const active = state === 'listening';

  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      {active && (
        <>
          <span className="absolute inset-0 rounded-full mic-ring" style={{ border: '1px solid rgba(0, 163, 255, 0.4)' }} />
          <span className="absolute inset-0 rounded-full mic-ring mic-ring--delay-1" style={{ border: '1px solid rgba(0, 163, 255, 0.3)' }} />
          <span className="absolute inset-0 rounded-full mic-ring mic-ring--delay-2" style={{ border: '1px solid rgba(0, 163, 255, 0.2)' }} />
        </>
      )}
      <div
        className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: active ? 'rgba(0, 163, 255, 0.15)' : 'rgba(13, 20, 30, 0.6)',
          border: `1px solid ${active ? 'rgba(0, 163, 255, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
          backdropFilter: 'blur(12px)',
          boxShadow: active ? '0 0 24px rgba(0, 163, 255, 0.35)' : 'none',
        }}
      >
        <Mic
          className="w-5 h-5 transition-colors duration-300"
          style={{ color: active ? '#00a3ff' : 'rgba(200, 210, 220, 0.6)' }}
        />
      </div>
    </div>
  );
}
