import { useLocation, Link, Navigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { AlertCircle, Download, Share2, HeartPulse } from 'lucide-react';
import { RiskGauge } from '../components/RiskGauge';
import { toast, Toaster } from 'sonner';

export const Results = () => {
  const location = useLocation();
  const assessment = location.state?.assessment;

  if (!assessment) {
    return <Navigate to="/assess" replace />;
  }

  const { risk_score, risk_band, factors, name } = assessment;

  const bandConfig = {
    low: {
      color: 'var(--risk-low)',
      bgClass: 'bg-[color:var(--risk-low)]/10 text-[color:var(--risk-low)] border-[color:var(--risk-low)]/30',
      label: 'Low Risk'
    },
    medium: {
      color: 'var(--risk-med)',
      bgClass: 'bg-[color:var(--risk-med)]/10 text-[color:var(--risk-med)] border-[color:var(--risk-med)]/30',
      label: 'Medium Risk'
    },
    high: {
      color: 'var(--risk-high)',
      bgClass: 'bg-[color:var(--risk-high)]/10 text-[color:var(--risk-high)] border-[color:var(--risk-high)]/30',
      label: 'High Risk'
    }
  };

  const currentBand = bandConfig[risk_band];

  const handleDownload = () => {
    const reportData = `Heart Attack Risk Assessment Report

Name: ${name}
Risk Score: ${risk_score}%
Risk Level: ${currentBand.label}

Contributing Factors:
${factors.map(f => `- ${f.factor}: +${f.contribution}%`).join('\n')}

Generated: ${new Date().toLocaleString()}`;

    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `heart-risk-report-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Report downloaded!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Heart Risk Assessment',
        text: `My heart attack risk score is ${risk_score}% (${currentBand.label})`,
      }).then(() => {
        toast.success('Shared successfully!');
      }).catch(() => {
        toast.error('Share cancelled');
      });
    } else {
      toast.info('Sharing not supported on this device');
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* High Risk Alert */}
        {risk_band === 'high' && (
          <div
            data-testid="high-risk-alert-banner"
            className="mb-6 rounded-[var(--r-lg)] border border-[color:var(--danger)] bg-[color:var(--danger)]/10 p-4 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-[color:var(--danger)] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[color:var(--danger)] mb-1">High Risk Detected</h3>
              <p className="text-sm text-[color:var(--danger)]">
                Your assessment indicates high risk. Please consult a medical professional immediately.
              </p>
            </div>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Gauge Card */}
          <Card className="lg:col-span-2 p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['EB_Garamond',serif] text-2xl font-bold">Your Risk Assessment</h2>
              <div className="flex gap-2">
                <Button
                  data-testid="download-button"
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button
                  data-testid="share-button"
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col items-center py-8">
              <RiskGauge value={risk_score} />
              
              <div className="mt-6 text-center">
                <div
                  data-testid="risk-percent-display"
                  className="font-['Space_Grotesk',monospace] text-6xl font-bold mb-2"
                >
                  {risk_score}%
                </div>
                <div
                  className={`inline-block px-4 py-2 rounded-full border ${currentBand.bgClass} font-medium`}
                >
                  {currentBand.label}
                </div>
              </div>
            </div>
          </Card>

          {/* Risk Legend Card */}
          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
            <h3 className="font-['EB_Garamond',serif] text-lg font-semibold mb-4">Risk Bands</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-block w-4 h-4 rounded-full bg-[color:var(--risk-low)]" />
                <div>
                  <div className="font-medium">Low Risk</div>
                  <div className="text-[color:var(--muted-ink)] text-xs">0–39%</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-4 h-4 rounded-full bg-[color:var(--risk-med)]" />
                <div>
                  <div className="font-medium">Medium Risk</div>
                  <div className="text-[color:var(--muted-ink)] text-xs">40–69%</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-4 h-4 rounded-full bg-[color:var(--risk-high)]" />
                <div>
                  <div className="font-medium">High Risk</div>
                  <div className="text-[color:var(--muted-ink)] text-xs">70–100%</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-lg bg-[color:var(--primary)]/5 border border-[color:var(--primary)]/20">
              <HeartPulse className="w-5 h-5 text-[color:var(--primary)] mb-2" />
              <p className="text-xs text-[color:var(--muted-ink)]">
                This assessment is for informational purposes only and should not replace professional medical advice.
              </p>
            </div>
          </Card>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="mb-6">
            <TabsTrigger data-testid="tab-overview" value="overview">Overview</TabsTrigger>
            <TabsTrigger data-testid="tab-explain" value="explain">Explanation</TabsTrigger>
            <TabsTrigger data-testid="tab-tips" value="tips">Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
              <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-4">Assessment Summary</h3>
              <p className="text-[color:var(--muted-ink)] mb-6">
                Based on your health profile, your heart attack risk score is <strong>{risk_score}%</strong>, classified as <strong>{currentBand.label}</strong>.
              </p>
              
              {risk_band === 'low' && (
                <p className="text-[color:var(--success)]">
                  Great news! Your current risk level is low. Continue maintaining healthy lifestyle habits.
                </p>
              )}
              {risk_band === 'medium' && (
                <p className="text-[color:var(--warning)]">
                  Your risk level is moderate. Consider implementing lifestyle changes and regular health checkups.
                </p>
              )}
              {risk_band === 'high' && (
                <p className="text-[color:var(--danger)]">
                  Your risk level requires immediate attention. Please schedule an appointment with a cardiologist.
                </p>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="explain">
            <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
              <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-4">Contributing Factors</h3>
              <p className="text-[color:var(--muted-ink)] mb-6">
                The following factors contributed to your risk score:
              </p>
              
              <div className="space-y-3">
                {factors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[color:var(--bg)]">
                    <span className="font-medium">{factor.factor}</span>
                    <span className="font-['Space_Grotesk',monospace] text-[color:var(--accent)] font-semibold">
                      +{factor.contribution}%
                    </span>
                  </div>
                ))}
              </div>

              {factors.length === 0 && (
                <p className="text-[color:var(--muted-ink)] italic">No significant risk factors identified.</p>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="tips">
            <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
              <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-4">Personalized Recommendations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-[color:var(--border)]">
                  <h4 className="font-semibold mb-2">Exercise Regularly</h4>
                  <p className="text-sm text-[color:var(--muted-ink)]">
                    Aim for 150 minutes of moderate aerobic activity per week.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-[color:var(--border)]">
                  <h4 className="font-semibold mb-2">Healthy Diet</h4>
                  <p className="text-sm text-[color:var(--muted-ink)]">
                    Adopt a heart-healthy diet rich in fruits, vegetables, and whole grains.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-[color:var(--border)]">
                  <h4 className="font-semibold mb-2">Manage Stress</h4>
                  <p className="text-sm text-[color:var(--muted-ink)]">
                    Practice stress-reduction techniques like meditation and yoga.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-[color:var(--border)]">
                  <h4 className="font-semibold mb-2">Regular Checkups</h4>
                  <p className="text-sm text-[color:var(--muted-ink)]">
                    Schedule regular health screenings and monitor your vitals.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/tips">
                  <Button variant="outline" className="w-full">View All Health Tips</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="mt-8 text-center">
          <Link to="/assess">
            <Button
              data-testid="retake-assessment-button"
              variant="outline"
              className="mr-4"
            >
              Take Another Assessment
            </Button>
          </Link>
          <Link to="/">
            <Button
              data-testid="back-home-button"
              className="bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
};