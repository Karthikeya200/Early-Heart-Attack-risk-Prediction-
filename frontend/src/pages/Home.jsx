import { Link } from 'react-router-dom';
import { HeartPulse, Camera, Sparkles, Info, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20"
        style={{
          '--hero-grad': 'linear-gradient(135deg, rgba(198,247,226,0.45) 0%, rgba(224,242,255,0.45) 50%, rgba(255,229,217,0.45) 100%)'
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ background: 'var(--hero-grad)' }}
        />
        <div className="noise-overlay" />
        
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h1 
                data-testid="hero-title"
                className="font-['EB_Garamond',serif] tracking-tight leading-tight text-balance text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                Early Heart Attack Risk, Assessed in Minutes
              </h1>
              <p className="text-lg text-[color:var(--muted-ink)] leading-relaxed">
                Get instant AI-powered heart health assessment using just your camera in 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/camera-assess">
                  <Button
                    data-testid="start-camera-assessment-button"
                    className="inline-flex items-center justify-center px-6 h-12 rounded-[var(--r-md)] font-medium bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200 text-lg gap-2"
                  >
                    <Camera className="w-5 h-5" />
                    60-Second Camera Scan
                  </Button>
                </Link>
                <Link to="/assess">
                  <Button
                    data-testid="start-assessment-button"
                    variant="outline"
                    className="inline-flex items-center justify-center px-6 h-12 rounded-[var(--r-md)] font-medium transition-colors duration-200 text-lg"
                  >
                    Full Assessment
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                alt="Abstract heart illustration"
                className="w-full h-auto max-h-[520px] object-contain rounded-2xl"
                style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl font-bold text-center mb-4">
          Two Ways to Assess Your Risk
        </h2>
        <p className="text-center text-[color:var(--muted-ink)] mb-12 max-w-2xl mx-auto">
          Choose the method that works best for you
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border-2 border-[color:var(--primary)]/20 hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-16 h-16 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[color:var(--primary)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-2xl font-semibold mb-2">60-Second Camera Scan</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed mb-4">
              Our AI analyzes your vital signs through your camera in just one minute. Quick, contactless, and instant results.
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted-ink)] mb-6">
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--primary)]">✓</span>
                Real-time vital sign detection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--primary)]">✓</span>
                Automatic risk calculation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--primary)]">✓</span>
                Instant results in 60 seconds
              </li>
            </ul>
            <Link to="/camera-assess">
              <Button className="w-full bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B]">
                Try Camera Scan
              </Button>
            </Link>
          </Card>

          <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-16 h-16 rounded-full bg-[color:var(--secondary)]/10 flex items-center justify-center mb-4">
              <HeartPulse className="w-8 h-8 text-[color:var(--secondary)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-2xl font-semibold mb-2">Comprehensive Assessment</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed mb-4">
              Detailed evaluation combining your medical history, lifestyle factors, and optional camera vitals.
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted-ink)] mb-6">
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--secondary)]">✓</span>
                Complete health questionnaire
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--secondary)]">✓</span>
                Detailed factor analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--secondary)]">✓</span>
                Personalized recommendations
              </li>
            </ul>
            <Link to="/assess">
              <Button variant="outline" className="w-full">
                Start Full Assessment
              </Button>
            </Link>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-[color:var(--primary)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">AI Vision Technology</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              Advanced rPPG algorithms detect your heart rate and vital signs through subtle facial color changes.
            </p>
          </Card>
          
          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--accent)]/10 flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6 text-[color:var(--accent)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">ML Risk Model</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              Machine learning analyzes 15+ health parameters to provide accurate risk predictions.
            </p>
          </Card>
          
          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[color:var(--secondary)]/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-[color:var(--secondary)]" />
            </div>
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">Personalized Tips</h3>
            <p className="text-[color:var(--muted-ink)] text-sm leading-relaxed">
              Get customized lifestyle recommendations based on your specific risk factors.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[color:var(--primary)]/5">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Info className="w-12 h-12 mx-auto mb-4 text-[color:var(--primary)]" />
          <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl font-bold mb-4">
            Take Control of Your Heart Health Today
          </h2>
          <p className="text-lg text-[color:var(--muted-ink)] mb-8">
            Early detection can save lives. Choose your assessment method and get started in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/camera-assess">
              <Button
                data-testid="cta-camera-button"
                className="inline-flex items-center justify-center px-6 h-12 rounded-[var(--r-md)] font-medium bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200 text-lg gap-2"
              >
                <Zap className="w-5 h-5" />
                Quick Camera Scan
              </Button>
            </Link>
            <Link to="/assess">
              <Button
                data-testid="cta-start-button"
                variant="outline"
                className="inline-flex items-center justify-center px-6 h-12 rounded-[var(--r-md)] font-medium transition-colors duration-200 text-lg"
              >
                Detailed Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};