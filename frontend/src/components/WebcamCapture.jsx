import React, { useRef, useState, useEffect } from 'react';
import { Camera, StopCircle } from 'lucide-react';
import { Button } from './ui/button';

export const WebcamCapture = ({ onVitalsUpdate }) => {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [simulatedVitals, setSimulatedVitals] = useState({
    heartRate: 0,
    respiratoryRate: 0,
    stressLevel: 0
  });

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: 640, height: 480 }, 
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStreaming(true);
      setError(null);
      
      // Start simulating vitals
      simulateVitals();
    } catch (e) {
      setError(e.message || 'Camera access denied');
    }
  };

  const stop = () => {
    const v = videoRef.current;
    if (v && v.srcObject) {
      v.srcObject.getTracks().forEach(t => t.stop());
      v.srcObject = null;
    }
    setStreaming(false);
    setSimulatedVitals({ heartRate: 0, respiratoryRate: 0, stressLevel: 0 });
    if (onVitalsUpdate) {
      onVitalsUpdate(null);
    }
  };

  const simulateVitals = () => {
    // Simulate realistic vital signs for demo
    const interval = setInterval(() => {
      const vitals = {
        heartRate: Math.floor(60 + Math.random() * 40), // 60-100 bpm
        respiratoryRate: Math.floor(12 + Math.random() * 8), // 12-20 rpm
        stressLevel: parseFloat((0.2 + Math.random() * 0.5).toFixed(2)) // 0.2-0.7
      };
      setSimulatedVitals(vitals);
      if (onVitalsUpdate) {
        onVitalsUpdate(vitals);
      }
    }, 2000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl overflow-hidden border border-[color:var(--border)] bg-black aspect-video">
        <video
          data-testid="webcam-video"
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <div className="noise-overlay" />
        {!streaming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/70">
              <Camera className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Camera preview</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {!streaming ? (
          <Button
            data-testid="webcam-start-button"
            onClick={start}
            className="flex items-center gap-2 bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200"
          >
            <Camera className="w-4 h-4" />
            Start Camera
          </Button>
        ) : (
          <Button
            data-testid="webcam-stop-button"
            onClick={stop}
            variant="outline"
            className="flex items-center gap-2"
          >
            <StopCircle className="w-4 h-4" />
            Stop
          </Button>
        )}
        {error && (
          <span data-testid="webcam-error-text" className="text-[color:var(--danger)] text-sm">
            {error}
          </span>
        )}
      </div>

      {streaming && (
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div data-testid="vital-chip-heart" className="rounded-xl border border-[color:var(--border)] p-3 text-center bg-[color:var(--surface)]">
            <div className="text-xs text-[color:var(--muted-ink)]">Heart Rate</div>
            <div className="font-['Space_Grotesk',monospace] text-2xl mt-1">
              {simulatedVitals.heartRate}
              <span className="text-sm ml-1">bpm</span>
            </div>
          </div>
          <div data-testid="vital-chip-resp" className="rounded-xl border border-[color:var(--border)] p-3 text-center bg-[color:var(--surface)]">
            <div className="text-xs text-[color:var(--muted-ink)]">Respiratory</div>
            <div className="font-['Space_Grotesk',monospace] text-2xl mt-1">
              {simulatedVitals.respiratoryRate}
              <span className="text-sm ml-1">rpm</span>
            </div>
          </div>
          <div data-testid="vital-chip-stress" className="rounded-xl border border-[color:var(--border)] p-3 text-center bg-[color:var(--surface)]">
            <div className="text-xs text-[color:var(--muted-ink)]">Stress</div>
            <div className="font-['Space_Grotesk',monospace] text-2xl mt-1">
              {simulatedVitals.stressLevel}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};