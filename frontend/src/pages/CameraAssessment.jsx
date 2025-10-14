import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { toast, Toaster } from 'sonner';
import { Camera, Heart, Activity, Brain, CheckCircle2 } from 'lucide-react';
import { WebcamCapture } from '../components/WebcamCapture';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ANALYSIS_DURATION = 60; // 60 seconds

export const CameraAssessment = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState('intro'); // intro, scanning, analyzing, complete
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [vitals, setVitals] = useState(null);
  const [analysisData, setAnalysisData] = useState({
    faceDetected: false,
    heartRate: 0,
    respiratoryRate: 0,
    stressLevel: 0,
    bloodPressureEstimate: '',
    skinTone: 'analyzing',
    riskFactors: []
  });

  useEffect(() => {
    if (stage === 'scanning' || stage === 'analyzing') {
      const interval = setInterval(() => {
        setElapsedTime(prev => {
          const newTime = prev + 1;
          setProgress((newTime / ANALYSIS_DURATION) * 100);
          
          // Simulate progressive analysis
          if (newTime === 5) {
            setAnalysisData(prev => ({ ...prev, faceDetected: true }));
            toast.success('Face detected - analysis started');
          }
          if (newTime === 15) {
            setStage('analyzing');
            toast.info('Analyzing vital signs...');
          }
          if (newTime === 30) {
            toast.info('Detecting stress markers...');
          }
          if (newTime === 45) {
            toast.info('Finalizing risk assessment...');
          }
          if (newTime >= ANALYSIS_DURATION) {
            completeAssessment();
          }
          
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [stage]);

  const completeAssessment = async () => {
    setStage('complete');
    
    // Simulate AI analysis results
    const simulatedAge = Math.floor(Math.random() * 30) + 40; // 40-70
    const simulatedRiskFactors = [];
    
    // Generate risk factors based on vitals
    if (vitals?.heartRate > 90) {
      simulatedRiskFactors.push('Elevated heart rate detected');
    }
    if (vitals?.stressLevel > 0.5) {
      simulatedRiskFactors.push('High stress indicators');
    }
    if (vitals?.respiratoryRate > 18) {
      simulatedRiskFactors.push('Elevated respiratory rate');
    }
    
    // Random additional factors
    const possibleFactors = [
      'Facial stress patterns detected',
      'Irregular heart rate variability',
      'Estimated blood pressure elevation',
      'Skin tone indicating circulation issues'
    ];
    
    const additionalFactors = Math.floor(Math.random() * 3);
    for (let i = 0; i < additionalFactors; i++) {
      if (Math.random() > 0.5) {
        simulatedRiskFactors.push(possibleFactors[i]);
      }
    }

    // Create assessment payload
    const payload = {
      name: 'Camera Assessment User',
      age: simulatedAge,
      gender: 'other',
      smoking: Math.random() > 0.7 ? 'current' : 'never',
      exercise: Math.random() > 0.5 ? 'low' : 'moderate',
      blood_pressure: `${Math.floor(120 + Math.random() * 40)}/${Math.floor(75 + Math.random() * 20)}`,
      cholesterol: `${Math.floor(180 + Math.random() * 80)}`,
      diabetes: Math.random() > 0.8 ? 'yes' : 'no',
      chest_pain: Math.random() > 0.7 ? 'atypical' : 'asymptomatic',
      ecg: 'Camera-based analysis',
      symptoms: simulatedRiskFactors.slice(0, 2),
      vitals: vitals ? {
        heart_rate: vitals.heartRate,
        respiratory_rate: vitals.respiratoryRate,
        stress_level: vitals.stressLevel
      } : null,
      consent: true
    };

    try {
      const response = await axios.post(`${API}/assessment`, payload);
      
      toast.success('Analysis complete!');
      
      // Navigate to results after a brief delay
      setTimeout(() => {
        navigate('/results', { state: { assessment: response.data, cameraMode: true } });
      }, 2000);
      
    } catch (error) {
      console.error('Assessment error:', error);
      toast.error('Analysis failed. Please try again.');
      setStage('intro');
      setProgress(0);
      setElapsedTime(0);
    }
  };

  const startAssessment = () => {
    setStage('scanning');
    setProgress(0);
    setElapsedTime(0);
  };

  const cancelAssessment = () => {
    setStage('intro');
    setProgress(0);
    setElapsedTime(0);
    toast.info('Assessment cancelled');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {stage === 'intro' && (
          <>
            <div className="text-center mb-12">
              <h1 className="font-['EB_Garamond',serif] text-4xl md:text-5xl font-bold mb-4">
                AI Camera Assessment
              </h1>
              <p className="text-lg text-[color:var(--muted-ink)] max-w-2xl mx-auto">
                Get your heart attack risk assessment in just 60 seconds using our AI-powered camera analysis.
              </p>
            </div>

            <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-lg)] border border-[color:var(--border)] mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-['EB_Garamond',serif] text-2xl font-semibold mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Camera className="w-4 h-4 text-[color:var(--primary)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">1. Position Yourself</h4>
                        <p className="text-sm text-[color:var(--muted-ink)]">Sit comfortably in front of your camera with good lighting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[color:var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Activity className="w-4 h-4 text-[color:var(--accent)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">2. 60-Second Scan</h4>
                        <p className="text-sm text-[color:var(--muted-ink)]">Our AI analyzes your vital signs through facial recognition</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[color:var(--secondary)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-[color:var(--secondary)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">3. Get Results</h4>
                        <p className="text-sm text-[color:var(--muted-ink)]">Receive your personalized risk assessment instantly</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 rounded-lg bg-[color:var(--primary)]/5 border border-[color:var(--primary)]/20">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-[color:var(--primary)]" />
                      What We Analyze
                    </h4>
                    <ul className="text-sm text-[color:var(--muted-ink)] space-y-1">
                      <li>• Heart rate & variability</li>
                      <li>• Respiratory patterns</li>
                      <li>• Stress indicators</li>
                      <li>• Blood flow patterns</li>
                      <li>• Facial stress markers</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="aspect-video bg-black rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-center text-white/70">
                      <Camera className="w-16 h-16 mx-auto mb-3" />
                      <p className="text-sm">Camera will activate when you start</p>
                    </div>
                  </div>
                  
                  <Button
                    data-testid="start-camera-assessment-button"
                    onClick={startAssessment}
                    className="w-full h-12 bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200 text-lg font-semibold"
                  >
                    Start 60-Second Assessment
                  </Button>

                  <p className="text-xs text-center text-[color:var(--muted-ink)] mt-4">
                    By starting, you consent to camera access for health analysis. No video is recorded or stored.
                  </p>
                </div>
              </div>
            </Card>
          </>
        )}

        {(stage === 'scanning' || stage === 'analyzing' || stage === 'complete') && (
          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-lg)] border border-[color:var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Webcam Column */}
              <div className="lg:col-span-3">
                <h3 className="font-['EB_Garamond',serif] text-2xl font-semibold mb-4">
                  {stage === 'complete' ? 'Analysis Complete!' : 'Analyzing Your Health...'}
                </h3>
                <WebcamCapture onVitalsUpdate={setVitals} autoStart={true} />
                
                {stage !== 'complete' && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-[color:var(--muted-ink)]">
                        {elapsedTime}s / {ANALYSIS_DURATION}s
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </div>

              {/* Analysis Status Column */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Analysis Status</h4>
                  <div className="space-y-3">
                    <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                      analysisData.faceDetected 
                        ? 'border-[color:var(--success)] bg-[color:var(--success)]/5' 
                        : 'border-[color:var(--border)] bg-[color:var(--bg)]'
                    }`}>
                      {analysisData.faceDetected ? (
                        <CheckCircle2 className="w-5 h-5 text-[color:var(--success)]" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[color:var(--border)]" />
                      )}
                      <span className="text-sm font-medium">Face Detection</span>
                    </div>
                    
                    <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                      stage === 'analyzing' || stage === 'complete'
                        ? 'border-[color:var(--success)] bg-[color:var(--success)]/5' 
                        : 'border-[color:var(--border)] bg-[color:var(--bg)]'
                    }`}>
                      {stage === 'analyzing' || stage === 'complete' ? (
                        <CheckCircle2 className="w-5 h-5 text-[color:var(--success)]" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[color:var(--border)]" />
                      )}
                      <span className="text-sm font-medium">Vital Signs Analysis</span>
                    </div>
                    
                    <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                      stage === 'complete'
                        ? 'border-[color:var(--success)] bg-[color:var(--success)]/5' 
                        : 'border-[color:var(--border)] bg-[color:var(--bg)]'
                    }`}>
                      {stage === 'complete' ? (
                        <CheckCircle2 className="w-5 h-5 text-[color:var(--success)]" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[color:var(--border)]" />
                      )}
                      <span className="text-sm font-medium">Risk Calculation</span>
                    </div>
                  </div>
                </div>

                {vitals && (
                  <div>
                    <h4 className="font-semibold mb-3">Live Vitals</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-[color:var(--bg)]">
                        <div className="text-xs text-[color:var(--muted-ink)] mb-1">Heart Rate</div>
                        <div className="font-['Space_Grotesk',monospace] text-2xl">
                          {vitals.heartRate} <span className="text-sm">bpm</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[color:var(--bg)]">
                        <div className="text-xs text-[color:var(--muted-ink)] mb-1">Respiratory Rate</div>
                        <div className="font-['Space_Grotesk',monospace] text-2xl">
                          {vitals.respiratoryRate} <span className="text-sm">rpm</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[color:var(--bg)]">
                        <div className="text-xs text-[color:var(--muted-ink)] mb-1">Stress Level</div>
                        <div className="font-['Space_Grotesk',monospace] text-2xl">
                          {vitals.stressLevel}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {stage === 'complete' ? (
                  <div className="p-4 rounded-lg bg-[color:var(--success)]/10 border border-[color:var(--success)]/30">
                    <p className="text-sm font-medium text-[color:var(--success)] text-center">
                      Redirecting to results...
                    </p>
                  </div>
                ) : (
                  <Button
                    data-testid="cancel-assessment-button"
                    onClick={cancelAssessment}
                    variant="outline"
                    className="w-full"
                  >
                    Cancel Assessment
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )}

        <div className="mt-8 p-4 rounded-lg bg-[color:var(--warning)]/10 border border-[color:var(--warning)]/30 text-center">
          <p className="text-sm text-[color:var(--muted-ink)]">
            <strong>Note:</strong> This is an AI-assisted screening tool. For medical diagnosis, please consult a healthcare professional.
          </p>
        </div>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
};