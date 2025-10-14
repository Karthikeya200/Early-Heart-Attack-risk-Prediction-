import { Card } from '../components/ui/card';
import { Info, TrendingUp, Activity } from 'lucide-react';

export const Explanations = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['EB_Garamond',serif] text-4xl md:text-5xl font-bold mb-4">
            How Our Predictions Work
          </h1>
          <p className="text-lg text-[color:var(--muted-ink)] max-w-2xl mx-auto">
            Understanding the science behind our risk assessment and explainable AI approach.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-[color:var(--primary)]" />
              </div>
              <div>
                <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-3">Data Collection & Processing</h2>
                <p className="text-[color:var(--muted-ink)] leading-relaxed mb-4">
                  Our system collects multiple data points to create a comprehensive health profile:
                </p>
                <ul className="space-y-2 text-[color:var(--muted-ink)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--primary)] mt-1">•</span>
                    <span><strong>Demographics:</strong> Age, gender, and lifestyle habits (smoking, exercise frequency)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--primary)] mt-1">•</span>
                    <span><strong>Medical Attributes:</strong> Blood pressure, cholesterol levels, diabetes status, ECG results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--primary)] mt-1">•</span>
                    <span><strong>Symptoms:</strong> Chest pain type, shortness of breath, fatigue, dizziness, sweating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--primary)] mt-1">•</span>
                    <span><strong>Real-Time Vitals:</strong> Heart rate, respiratory rate, and stress indicators via webcam rPPG</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[color:var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-[color:var(--accent)]" />
              </div>
              <div>
                <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-3">Risk Calculation Model</h2>
                <p className="text-[color:var(--muted-ink)] leading-relaxed mb-4">
                  Our machine learning model analyzes the collected data through a weighted scoring system:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-[color:var(--bg)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Age Factor</span>
                      <span className="font-['Space_Grotesk',monospace] text-[color:var(--accent)]">5-25%</span>
                    </div>
                    <p className="text-sm text-[color:var(--muted-ink)]">Risk increases with age, especially >50 years</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[color:var(--bg)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Lifestyle Factors</span>
                      <span className="font-['Space_Grotesk',monospace] text-[color:var(--accent)]">10-35%</span>
                    </div>
                    <p className="text-sm text-[color:var(--muted-ink)]">Smoking status and exercise frequency</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[color:var(--bg)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Medical Conditions</span>
                      <span className="font-['Space_Grotesk',monospace] text-[color:var(--accent)]">20-40%</span>
                    </div>
                    <p className="text-sm text-[color:var(--muted-ink)]">Blood pressure, cholesterol, diabetes</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[color:var(--bg)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Symptoms & Vitals</span>
                      <span className="font-['Space_Grotesk',monospace] text-[color:var(--accent)]">3-15%</span>
                    </div>
                    <p className="text-sm text-[color:var(--muted-ink)]">Present symptoms and real-time vital signs</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[color:var(--secondary)]/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-[color:var(--secondary)]" />
              </div>
              <div>
                <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-3">Explainable AI (XAI)</h2>
                <p className="text-[color:var(--muted-ink)] leading-relaxed mb-4">
                  We believe in transparency. Our system uses Explainable AI techniques to show which factors contributed most to your risk score:
                </p>
                <ul className="space-y-2 text-[color:var(--muted-ink)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--secondary)] mt-1">✓</span>
                    <span><strong>Factor Attribution:</strong> See exactly how much each health parameter contributed to your score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--secondary)] mt-1">✓</span>
                    <span><strong>Visual Explanations:</strong> Interactive charts and gauges make complex data easy to understand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--secondary)] mt-1">✓</span>
                    <span><strong>Actionable Insights:</strong> Personalized recommendations based on your specific risk factors</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-3">Risk Bands Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-lg border-2 border-[color:var(--risk-low)] bg-[color:var(--risk-low)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-[color:var(--risk-low)]" />
                  <h3 className="font-semibold">Low Risk (0-39%)</h3>
                </div>
                <p className="text-sm text-[color:var(--muted-ink)]">
                  Continue healthy habits. Regular checkups recommended for monitoring.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-[color:var(--risk-med)] bg-[color:var(--risk-med)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-[color:var(--risk-med)]" />
                  <h3 className="font-semibold">Medium Risk (40-69%)</h3>
                </div>
                <p className="text-sm text-[color:var(--muted-ink)]">
                  Implement lifestyle changes. Consider consulting a healthcare provider.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-[color:var(--risk-high)] bg-[color:var(--risk-high)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-[color:var(--risk-high)]" />
                  <h3 className="font-semibold">High Risk (70-100%)</h3>
                </div>
                <p className="text-sm text-[color:var(--muted-ink)]">
                  Immediate medical attention recommended. Schedule cardiologist appointment.
                </p>
              </div>
            </div>
          </Card>

          <div className="p-6 rounded-[var(--r-lg)] bg-[color:var(--primary)]/5 border border-[color:var(--primary)]/20">
            <h3 className="font-semibold mb-2">Model Accuracy</h3>
            <p className="text-sm text-[color:var(--muted-ink)]">
              Our ML models achieve 85-97% accuracy on test datasets, with performance validated using metrics including precision, recall, F1-score, and AUC. Continuous model refinement ensures reliable predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};