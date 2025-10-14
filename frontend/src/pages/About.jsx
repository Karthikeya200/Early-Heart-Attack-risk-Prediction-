import { Card } from '../components/ui/card';
import { HeartPulse, Brain, Shield, Zap } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['EB_Garamond',serif] text-4xl md:text-5xl font-bold mb-4">
            About Early Heart Risk Detect
          </h1>
          <p className="text-lg text-[color:var(--muted-ink)] max-w-2xl mx-auto">
            Leveraging advanced machine learning to provide early heart attack risk detection through comprehensive health analysis.
          </p>
        </div>

        <div className="prose prose-slate max-w-none mb-12">
          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-[color:var(--muted-ink)] leading-relaxed">
              Early detection of heart attack risk is crucial due to the subtle and often non-specific nature of initial symptoms. Traditional diagnostic methods are typically reactive and may identify risk only after significant damage occurs. Our mission is to empower individuals with proactive, data-driven risk assessments that enable timely intervention and preventive care.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-[color:var(--primary)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              Our system uses advanced ML algorithms including Random Forest, XGBoost, and Neural Networks to analyze multiple health parameters and predict risk with high accuracy.
            </p>
          </Card>

          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--accent)]/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[color:var(--accent)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              Webcam-based rPPG technology captures vital signs including heart rate, respiratory rate, and stress indicators without any physical contact.
            </p>
          </Card>

          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--secondary)]/10 flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6 text-[color:var(--secondary)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">Comprehensive Analysis</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              We analyze demographics, medical history, lifestyle factors, symptoms, and real-time vitals to provide a holistic risk assessment.
            </p>
          </Card>

          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--success)]/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[color:var(--success)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              Your health data is processed securely. Webcam data is analyzed in real-time and never stored without your explicit consent.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-[color:var(--primary)]/5 rounded-[var(--r-lg)] border border-[color:var(--primary)]/20">
          <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="block mb-1">Frontend:</strong>
              <span className="text-[color:var(--muted-ink)]">React, D3.js, Tailwind CSS</span>
            </div>
            <div>
              <strong className="block mb-1">Backend:</strong>
              <span className="text-[color:var(--muted-ink)]">FastAPI, Python</span>
            </div>
            <div>
              <strong className="block mb-1">Database:</strong>
              <span className="text-[color:var(--muted-ink)]">MongoDB</span>
            </div>
            <div>
              <strong className="block mb-1">ML Models:</strong>
              <span className="text-[color:var(--muted-ink)]">Scikit-learn, XGBoost</span>
            </div>
            <div>
              <strong className="block mb-1">Vision:</strong>
              <span className="text-[color:var(--muted-ink)]">WebRTC, rPPG</span>
            </div>
            <div>
              <strong className="block mb-1">XAI:</strong>
              <span className="text-[color:var(--muted-ink)]">SHAP, LIME</span>
            </div>
          </div>
        </Card>

        <div className="mt-12 p-6 rounded-[var(--r-lg)] bg-[color:var(--warning)]/10 border border-[color:var(--warning)]/30">
          <h3 className="font-semibold text-[color:var(--warning)] mb-2">Important Disclaimer</h3>
          <p className="text-sm text-[color:var(--muted-ink)]">
            This tool is designed for informational and educational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers regarding any medical concerns or before making any decisions related to your health.
          </p>
        </div>
      </div>
    </div>
  );
};