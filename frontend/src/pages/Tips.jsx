import { Card } from '../components/ui/card';
import { Heart, Dumbbell, Apple, Brain, Moon, Users } from 'lucide-react';

export const Tips = () => {
  const tips = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Regular Exercise',
      description: 'Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week.',
      actions: [
        'Walking, jogging, or cycling',
        'Swimming or water aerobics',
        'Strength training 2x per week',
        'Yoga or stretching exercises'
      ]
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: 'Heart-Healthy Diet',
      description: 'Adopt a balanced diet rich in nutrients that support cardiovascular health.',
      actions: [
        'Fruits and vegetables (5+ servings/day)',
        'Whole grains and fiber',
        'Lean proteins and fish',
        'Limit sodium, sugar, and saturated fats'
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Stress Management',
      description: 'Chronic stress can negatively impact heart health. Practice stress-reduction techniques.',
      actions: [
        'Meditation or mindfulness',
        'Deep breathing exercises',
        'Hobbies and leisure activities',
        'Time management strategies'
      ]
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: 'Quality Sleep',
      description: 'Adequate sleep is essential for heart health and overall well-being.',
      actions: [
        '7-9 hours of sleep per night',
        'Consistent sleep schedule',
        'Dark, cool sleeping environment',
        'Limit screen time before bed'
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Regular Health Screenings',
      description: 'Monitor key health metrics and catch potential issues early.',
      actions: [
        'Blood pressure checks',
        'Cholesterol level tests',
        'Blood glucose monitoring',
        'Annual physical examinations'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Social Connections',
      description: 'Strong social relationships contribute to better heart health and longevity.',
      actions: [
        'Maintain close friendships',
        'Join community groups',
        'Volunteer activities',
        'Family gatherings'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['EB_Garamond',serif] text-4xl md:text-5xl font-bold mb-4">
            Heart Health Tips
          </h1>
          <p className="text-lg text-[color:var(--muted-ink)] max-w-2xl mx-auto">
            Evidence-based lifestyle recommendations to reduce your heart attack risk and improve overall cardiovascular health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tips.map((tip, index) => (
            <Card 
              key={index}
              className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0 text-[color:var(--primary)]">
                  {tip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-[color:var(--muted-ink)] text-sm mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  <ul className="space-y-2">
                    {tip.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-[color:var(--primary)] mt-1">✓</span>
                        <span className="text-[color:var(--muted-ink)]">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-[color:var(--danger)]/5 rounded-[var(--r-lg)] border border-[color:var(--danger)]/20">
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-3 text-[color:var(--danger)]">
              Avoid These Risk Factors
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">✗</span>
                <span><strong>Smoking:</strong> Quit or avoid tobacco products entirely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">✗</span>
                <span><strong>Excessive Alcohol:</strong> Limit to moderate consumption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">✗</span>
                <span><strong>Sedentary Lifestyle:</strong> Reduce prolonged sitting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">✗</span>
                <span><strong>Poor Diet:</strong> Minimize processed and fast foods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">✗</span>
                <span><strong>Unmanaged Stress:</strong> Address chronic anxiety</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-[color:var(--success)]/5 rounded-[var(--r-lg)] border border-[color:var(--success)]/20">
            <h3 className="font-['EB_Garamond',serif] text-xl font-semibold mb-3 text-[color:var(--success)]">
              Emergency Warning Signs
            </h3>
            <p className="text-sm text-[color:var(--muted-ink)] mb-3">
              Call emergency services immediately if you experience:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">•</span>
                <span>Chest pain or discomfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">•</span>
                <span>Pain in jaw, neck, or back</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">•</span>
                <span>Shortness of breath</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">•</span>
                <span>Nausea or lightheadedness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--danger)] mt-1">•</span>
                <span>Cold sweat or fatigue</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-[color:var(--primary)]/5 rounded-[var(--r-lg)] border border-[color:var(--primary)]/20 text-center">
          <h3 className="font-['EB_Garamond',serif] text-2xl font-bold mb-3">
            Remember: Small Changes Add Up
          </h3>
          <p className="text-[color:var(--muted-ink)] max-w-2xl mx-auto">
            You don't need to implement all changes at once. Start with one or two habits that feel manageable, and gradually build from there. Consistency is more important than perfection. Consult with your healthcare provider before making significant lifestyle changes.
          </p>
        </Card>
      </div>
    </div>
  );
};