import React, { useRef, useState, useEffect } from 'react';
import { Camera, StopCircle } from 'lucide-react';
import { Button } from './ui/button';

export const WebcamCapture = ({ onVitalsUpdate, autoStart = false }) => {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [simulatedVitals, setSimulatedVitals] = useState({
    heartRate: 0,
    respiratoryRate: 0,
    stressLevel: 0
  });

  useEffect(() => {
    if (autoStart) {
      start();
    }
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
      }
    };
  }, [autoStart]);

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
      const interval = setInterval(() => {
        const vitals = {
          heartRate: Math.floor(65 + Math.random() * 35), // 65-100 bpm
          respiratoryRate: Math.floor(13 + Math.random() * 7), // 13-20 rpm
          stressLevel: parseFloat((0.25 + Math.random() * 0.45).toFixed(2)) // 0.25-0.7
        };
        setSimulatedVitals(vitals);
        if (onVitalsUpdate) {
          onVitalsUpdate(vitals);
        }
      }, 2000);

      // Store interval for cleanup
      videoRef.current.vitalsInterval = interval;
    } catch (e) {
      setError(e.message || 'Camera access denied');
    }
  };

  const stop = () => {
    const v = videoRef.current;
    if (v) {
      if (v.srcObject) {
        v.srcObject.getTracks().forEach(t => t.stop());
        v.srcObject = null;
      }
      if (v.vitalsInterval) {
        clearInterval(v.vitalsInterval);
      }
    }
    setStreaming(false);
    setSimulatedVitals({ heartRate: 0, respiratoryRate: 0, stressLevel: 0 });
    if (onVitalsUpdate) {
      onVitalsUpdate(null);
    }
  };

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
        {streaming && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE
          </div>
        )}
      </div>
      
      {!autoStart && (
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
      )}

      {streaming && !autoStart && (
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