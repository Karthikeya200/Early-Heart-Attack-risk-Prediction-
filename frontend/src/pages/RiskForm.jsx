import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import { toast, Toaster } from 'sonner';
import { WebcamCapture } from '../components/WebcamCapture';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const RiskForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [vitals, setVitals] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    smoking: '',
    exercise: '',
    blood_pressure: '',
    cholesterol: '',
    diabetes: '',
    chest_pain: '',
    ecg: '',
    symptoms: [],
    consent: true
  });

  const symptomOptions = [
    'Shortness of breath',
    'Fatigue',
    'Dizziness',
    'Sweating'
  ];

  const handleSymptomToggle = (symptom) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.gender) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      const payload = {
        ...formData,
        age: parseInt(formData.age),
        vitals: vitals ? {
          heart_rate: vitals.heartRate,
          respiratory_rate: vitals.respiratoryRate,
          stress_level: vitals.stressLevel
        } : null
      };
      
      const response = await axios.post(`${API}/assessment`, payload);
      
      toast.success('Assessment complete!');
      
      // Navigate to results page with assessment data
      setTimeout(() => {
        navigate('/results', { state: { assessment: response.data } });
      }, 500);
      
    } catch (error) {
      console.error('Assessment error:', error);
      toast.error('Failed to complete assessment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-['EB_Garamond',serif] text-3xl md:text-4xl font-bold mb-2">
            Risk Assessment
          </h1>
          <p className="text-[color:var(--muted-ink)]">
            Please provide accurate information for the most reliable results.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
            {/* Left Panel - Form */}
            <Card className="xl:col-span-3 p-5 sm:p-6 space-y-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    data-testid="name-input"
                    id="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    data-testid="age-input"
                    id="age"
                    type="number"
                    placeholder="45"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label>Gender *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, gender: value})} value={formData.gender}>
                    <SelectTrigger data-testid="gender-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Smoking Status</Label>
                  <Select onValueChange={(value) => setFormData({...formData, smoking: value})} value={formData.smoking}>
                    <SelectTrigger data-testid="smoking-select">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="former">Former</SelectItem>
                      <SelectItem value="current">Current</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Exercise Frequency</Label>
                  <Select onValueChange={(value) => setFormData({...formData, exercise: value})} value={formData.exercise}>
                    <SelectTrigger data-testid="exercise-select">
                      <SelectValue placeholder="Frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Blood Pressure</Label>
                  <Input
                    data-testid="bp-input"
                    placeholder="e.g., 120/80"
                    value={formData.blood_pressure}
                    onChange={(e) => setFormData({...formData, blood_pressure: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Cholesterol (mg/dL)</Label>
                  <Input
                    data-testid="chol-input"
                    placeholder="e.g., 200"
                    value={formData.cholesterol}
                    onChange={(e) => setFormData({...formData, cholesterol: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Diabetes</Label>
                  <Select onValueChange={(value) => setFormData({...formData, diabetes: value})} value={formData.diabetes}>
                    <SelectTrigger data-testid="diabetes-select">
                      <SelectValue placeholder="No/Yes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Chest Pain Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, chest_pain: value})} value={formData.chest_pain}>
                    <SelectTrigger data-testid="cp-select">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="typical">Typical angina</SelectItem>
                      <SelectItem value="atypical">Atypical angina</SelectItem>
                      <SelectItem value="non-anginal">Non-anginal pain</SelectItem>
                      <SelectItem value="asymptomatic">Asymptomatic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label>ECG Result</Label>
                  <Input
                    data-testid="ecg-input"
                    placeholder="e.g., Normal"
                    value={formData.ecg}
                    onChange={(e) => setFormData({...formData, ecg: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Symptoms</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {symptomOptions.map((symptom, i) => (
                    <label key={i} className="inline-flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        data-testid={`symptom-checkbox-${i}`}
                        checked={formData.symptoms.includes(symptom)}
                        onCheckedChange={() => handleSymptomToggle(symptom)}
                      />
                      <span className="text-sm">{symptom}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[color:var(--border)]">
                <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
                  <Switch
                    data-testid="consent-switch"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({...formData, consent: checked})}
                  />
                  I consent to camera processing for vitals
                </label>
                <Button
                  data-testid="submit-risk-form-button"
                  type="submit"
                  disabled={loading}
                  className="bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200"
                >
                  {loading ? 'Analyzing...' : 'Calculate Risk'}
                </Button>
              </div>
            </Card>

            {/* Right Panel - Webcam */}
            <Card className="xl:col-span-2 p-5 sm:p-6 space-y-4 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
              <h3 className="font-['EB_Garamond',serif] text-lg font-semibold">Webcam & Live Vitals</h3>
              <p className="text-sm text-[color:var(--muted-ink)]">
                Enable your camera to capture real-time vital signs for enhanced accuracy.
              </p>
              <WebcamCapture onVitalsUpdate={setVitals} />
            </Card>
          </div>
        </form>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
};