{
  "meta": {
    "app_name": "Early Heart Risk Detect",
    "type": "Healthcare risk assessment web app with webcam vitals",
    "audience": ["Adults 25–70", "Clinicians for demos", "Wellness enthusiasts"],
    "brand_attributes": ["reassuring", "artistic", "evidence-driven", "friendly"],
    "success_actions": [
      "User completes Risk Assessment form with webcam capture",
      "Sees results with clear risk band and personalized tips",
      "Understands why via explanation visuals",
      "Shares or saves report"
    ],
    "inspiration_sources": [
      "https://dribbble.com/tags/healthcare-dashboard",
      "https://dribbble.com/search/heart-rate-visualization",
      "https://www.behance.net/search/projects/medical%20dashboard?locale=en_US",
      "https://cameravitals.github.io/",
      "https://www.koruux.com/50-examples-of-healthcare-UI/"
    ]
  },

  "tokens": {
    "colors": {
      "--bg": "#FAF7F2",
      "--surface": "#FFFFFF",
      "--ink": "#0A0A0A",
      "--muted-ink": "#475467",
      "--primary": "#0FA3B1",            
      "--primary-ink": "#FFFFFF",
      "--accent": "#FF8A5B",             
      "--accent-ink": "#0A0A0A",
      "--secondary": "#76C7F0",          
      "--secondary-ink": "#063A59",
      "--success": "#2E7D32",
      "--warning": "#EFB661",
      "--danger": "#D64545",
      "--border": "#E5E7EB",
      "--ring": "#0FA3B1",
      "--risk-low": "#22C55E",
      "--risk-med": "#F59E0B",
      "--risk-high": "#EF4444"
    },
    "typography": {
      "--font-heading": "'EB Garamond', serif",
      "--font-body": "'Figtree', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-numeric": "'Space Grotesk', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      "scale": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl",
        "h2": "text-base md:text-lg",
        "body": "text-base sm:text-sm",
        "small": "text-sm",
        "tiny": "text-xs"
      }
    },
    "radius": {
      "--r-sm": "8px",
      "--r-md": "12px",
      "--r-lg": "16px",
      "--r-xl": "24px"
    },
    "shadow": {
      "--shadow-sm": "0 1px 2px rgba(16,24,40,0.04)",
      "--shadow-md": "0 2px 8px rgba(16,24,40,0.08)",
      "--shadow-lg": "0 8px 30px rgba(16,24,40,0.08)"
    },
    "motion": {
      "--ease-standard": "cubic-bezier(0.2, 0.8, 0.2, 1)",
      "--dur-fast": "120ms",
      "--dur-med": "220ms",
      "--dur-slow": "420ms"
    },
    "gradients": {
      "hero-soft": "linear-gradient(135deg, rgba(198,247,226,0.45) 0%, rgba(224,242,255,0.45) 50%, rgba(255,229,217,0.45) 100%)",
      "accent-wash": "radial-gradient(50% 50% at 80% 0%, rgba(255,138,91,0.15) 0%, rgba(255,138,91,0) 60%)"
    }
  },

  "style_overrides": {
    "tailwind_base_patch": "Update src/index.css :root tokens to match tokens.colors above. Keep dark theme tokens but ensure high contrast. Use body{ @apply bg-[color:var(--bg)] text-[color:var(--ink)]; }",
    "noise_overlay_css": ".noise-overlay{pointer-events:none;position:absolute;inset:0;background-image:radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px);background-size:3px 3px;mix-blend-mode:multiply;opacity:.6;}",
    "selection_css": "::selection{background:rgba(15,163,177,0.16);color:var(--ink);}"
  },

  "typography": {
    "import_html": "<link href=\"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@600;700&family=Figtree:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap\" rel=\"stylesheet\">",
    "utility_examples": {
      "h1": "font-[var(--font-heading)] tracking-tight leading-tight text-balance",
      "metric": "font-[var(--font-numeric)] tabular-nums"
    }
  },

  "layout": {
    "global_shell": {
      "header": "sticky top-0 z-50 backdrop-blur bg-[color:var(--surface)]/85 border-b border-[color:var(--border)]",
      "container": "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
      "nav": "flex items-center justify-between h-14"
    },
    "home": {
      "hero": "relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20",
      "hero_content": "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
      "bento": "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    },
    "form_page": {
      "grid": "grid grid-cols-1 xl:grid-cols-5 gap-6",
      "left": "xl:col-span-3 space-y-6",
      "right": "xl:col-span-2 space-y-6"
    },
    "results": {
      "grid": "grid grid-cols-1 lg:grid-cols-3 gap-6",
      "gauge_col": "lg:col-span-2",
      "explain_col": "lg:col-span-1"
    },
    "content_pages": "prose prose-slate max-w-none prose-headings:font-[var(--font-heading)] prose-p:leading-relaxed"
  },

  "risk_semantics": {
    "bands": [
      {"name": "Low", "range": "0–39%", "color": "var(--risk-low)"},
      {"name": "Medium", "range": "40–69%", "color": "var(--risk-med)"},
      {"name": "High", "range": "70–100%", "color": "var(--risk-high)"}
    ],
    "badge_classes": {
      "low": "bg-[color:var(--risk-low)]/10 text-[color:var(--risk-low)] border border-[color:var(--risk-low)]/30",
      "med": "bg-[color:var(--risk-med)]/10 text-[color:var(--risk-med)] border border-[color:var(--risk-med)]/30",
      "high": "bg-[color:var(--risk-high)]/10 text-[color:var(--risk-high)] border border-[color:var(--risk-high)]/30"
    }
  },

  "components": {
    "buttons": {
      "tone": "Professional / Corporate with gentle creative accents",
      "base": "inline-flex items-center justify-center px-4 h-11 rounded-[var(--r-md)] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
      "primary": "bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B]",
      "secondary": "bg-[color:var(--secondary)] text-[color:var(--secondary-ink)] hover:bg-[#5FB9EA]",
      "ghost": "bg-transparent text-[color:var(--ink)] border border-[color:var(--border)] hover:bg-black/5"
    },
    "cards": {
      "base": "bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]",
      "padding": "p-5 sm:p-6"
    },
    "micro_interactions": [
      "Buttons: color hover only (no transition: all). Use transition-colors duration-200",
      "Card hover: translate-y-[1px] with subtle shadow-lg duration-200",
      "Nav underline grows from left on hover",
      "Parallax: hero decorative shapes move 10–20px with scroll using transform only"
    ]
  },

  "component_path": {
    "accordion": "./components/ui/accordion",
    "alert": "./components/ui/alert",
    "alert-dialog": "./components/ui/alert-dialog",
    "avatar": "./components/ui/avatar",
    "badge": "./components/ui/badge",
    "breadcrumb": "./components/ui/breadcrumb",
    "button": "./components/ui/button",
    "calendar": "./components/ui/calendar",
    "card": "./components/ui/card",
    "carousel": "./components/ui/carousel",
    "checkbox": "./components/ui/checkbox",
    "collapsible": "./components/ui/collapsible",
    "command": "./components/ui/command",
    "dialog": "./components/ui/dialog",
    "drawer": "./components/ui/drawer",
    "dropdown-menu": "./components/ui/dropdown-menu",
    "form": "./components/ui/form",
    "hover-card": "./components/ui/hover-card",
    "input": "./components/ui/input",
    "label": "./components/ui/label",
    "menubar": "./components/ui/menubar",
    "navigation-menu": "./components/ui/navigation-menu",
    "pagination": "./components/ui/pagination",
    "popover": "./components/ui/popover",
    "progress": "./components/ui/progress",
    "radio-group": "./components/ui/radio-group",
    "resizable": "./components/ui/resizable",
    "scroll-area": "./components/ui/scroll-area",
    "select": "./components/ui/select",
    "separator": "./components/ui/separator",
    "sheet": "./components/ui/sheet",
    "skeleton": "./components/ui/skeleton",
    "slider": "./components/ui/slider",
    "sonner": "./components/ui/sonner",
    "switch": "./components/ui/switch",
    "table": "./components/ui/table",
    "tabs": "./components/ui/tabs",
    "textarea": "./components/ui/textarea",
    "toast": "./components/ui/toast",
    "toaster": "./components/ui/toaster",
    "toggle": "./components/ui/toggle",
    "toggle-group": "./components/ui/toggle-group",
    "tooltip": "./components/ui/tooltip"
  },

  "pages": {
    "home": {
      "sections": [
        {
          "id": "hero",
          "classes": "relative isolate",
          "bg": "before:content-[''] before:absolute before:inset-0 before:bg-[image:var(--hero-grad)] before:opacity-100",
          "content": [
            "Left: headline (EB Garamond), subcopy (Figtree), primary CTA 'Start Assessment'",
            "Right: floating webcam frame mock + animated metric chips"
          ],
          "testids": ["start-assessment-button"]
        },
        {
          "id": "how-it-works",
          "classes": "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12",
          "content": "3 cards: Camera Capture, ML Risk Model, Personalized Tips"
        },
        {
          "id": "visual-sizzle",
          "classes": "relative mt-16",
          "content": "Carousel of abstract heart illustrations with parallax and noise overlay"
        }
      ],
      "hero_gradient_variable": "--hero-grad: linear-gradient(135deg, rgba(198,247,226,.45), rgba(224,242,255,.45), rgba(255,229,217,.45))"
    },
    "risk_form": {
      "layout": "2-panel: left form, right webcam+vitals",
      "form_fields": [
        "Name, Age, Gender, Smoking, Exercise",
        "BP, Cholesterol, Diabetes, Chest pain type, Resting ECG",
        "Symptoms: SOB, Fatigue, Dizziness, Sweating (checkboxes)",
        "Consent toggle"
      ],
      "webcam_panel": "Live preview, start/stop, capture snapshot; vitals chips (heart, respiratory, stress)"
    },
    "results": {
      "components": [
        "Risk percentage with band color",
        "Gauge meter (semi-circular) with pointer",
        "Alert banner if High risk",
        "Tabs: Overview | Explanation | Tips",
        "Download/Share actions"
      ]
    },
    "about": {"content": "Project info, technology stack, safety note"},
    "explanations": {"content": "XAI overview, SHAP-like beeswarm + feature attributions"},
    "tips": {"content": "Lifestyle tiles, routines, reminders"},
    "contact": {"content": "Feedback form using shadcn form components"}
  },

  "patterns": {
    "webcam_capture_component.jsx": "export const WebcamCapture = () => {\n  const videoRef = React.useRef(null);\n  const [streaming, setStreaming] = React.useState(false);\n  const [error, setError] = React.useState(null);\n\n  const start = async () => {\n    try {\n      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });\n      if (videoRef.current) { videoRef.current.srcObject = stream; }\n      setStreaming(true);\n    } catch (e) { setError(e.message); }\n  };\n  const stop = () => {\n    const v = videoRef.current;\n    if (v && v.srcObject) { v.srcObject.getTracks().forEach(t => t.stop()); }\n    setStreaming(false);\n  };\n  return (\n    <div className=\"space-y-3\">\n      <div className=\"relative rounded-2xl overflow-hidden border border-[color:var(--border)] bg-black\">\n        <video data-testid=\"webcam-video\" ref={videoRef} autoPlay playsInline muted className=\"w-full aspect-video object-cover\"/>\n        <div className=\"noise-overlay\"/>\n      </div>\n      <div className=\"flex items-center gap-2\">\n        <button data-testid=\"webcam-start-button\" className=\"\" onClick={start}>Start</button>\n        <button data-testid=\"webcam-stop-button\" className=\"\" onClick={stop}>Stop</button>\n        {error && <span data-testid=\"webcam-error-text\" className=\"text-[color:var(--danger)] text-sm\">{error}</span>}\n      </div>\n    </div>\n  );\n};",

    "d3_gauge_component.jsx": "import * as d3 from 'd3';\nexport const RiskGauge = ({ value = 42 }) => {\n  const ref = React.useRef(null);\n  React.useEffect(() => {\n    const el = ref.current;\n    const w = 380, h = 200, r = 180;\n    el.innerHTML = '';\n    const svg = d3.select(el).append('svg').attr('width', '100%').attr('viewBox', `0 0 ${w} ${h}`);\n    const arc = d3.arc().innerRadius(r-18).outerRadius(r).startAngle(-Math.PI/1.2);\n    const scale = d3.scaleLinear().domain([0,100]).range([-Math.PI/1.2, Math.PI/1.2]);\n    const bands = [\n      {t: 40, c: getComputedStyle(document.documentElement).getPropertyValue('--risk-low').trim()},\n      {t: 70, c: getComputedStyle(document.documentElement).getPropertyValue('--risk-med').trim()},\n      {t: 100, c: getComputedStyle(document.documentElement).getPropertyValue('--risk-high').trim()}\n    ];\n    let start = -Math.PI/1.2, prev=0;\n    bands.forEach(b => {\n      svg.append('path').attr('d', arc.endAngle(scale(b.t))).attr('transform', `translate(${w/2},${h})`).attr('fill', b.c).attr('opacity', .2);\n    });\n    const needleAngle = scale(value);\n    const g = svg.append('g').attr('transform', `translate(${w/2},${h})`);\n    g.append('line').attr('x1',0).attr('y1',0).attr('x2', Math.sin(needleAngle)*r*.9).attr('y2', -Math.cos(needleAngle)*r*.9).attr('stroke','#111').attr('stroke-width',3).attr('stroke-linecap','round');\n    svg.append('text').attr('x', w/2).attr('y', h-30).attr('text-anchor','middle').attr('class','font-[var(--font-numeric)]').text(`${value}%`);\n  }, [value]);\n  return <div data-testid=\"risk-gauge\" ref={ref} className=\"w-full\"/>;\n};",

    "risk_form_scaffold.jsx": "import { Button } from './components/ui/button';\nimport { Card } from './components/ui/card';\nimport { Input } from './components/ui/input';\nimport { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select';\nimport { Checkbox } from './components/ui/checkbox';\nimport { Label } from './components/ui/label';\nimport { Switch } from './components/ui/switch';\nimport { toast, Toaster } from './components/ui/sonner';\nexport default function RiskFormPage(){\n  return (\n    <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8\">\n      <div className=\"grid grid-cols-1 xl:grid-cols-5 gap-6\">\n        <Card className=\"xl:col-span-3 p-6 space-y-6\">\n          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n            <div>\n              <Label htmlFor=\"name\">Name</Label>\n              <Input data-testid=\"name-input\" id=\"name\" placeholder=\"Jane Doe\"/>\n            </div>\n            <div>\n              <Label htmlFor=\"age\">Age</Label>\n              <Input data-testid=\"age-input\" id=\"age\" type=\"number\"/>\n            </div>\n            <div>\n              <Label>Gender</Label>\n              <Select>\n                <SelectTrigger data-testid=\"gender-select\"><SelectValue placeholder=\"Select\"/></SelectTrigger>\n                <SelectContent>\n                  <SelectItem value=\"female\">Female</SelectItem>\n                  <SelectItem value=\"male\">Male</SelectItem>\n                  <SelectItem value=\"other\">Other</SelectItem>\n                </SelectContent>\n              </Select>\n            </div>\n            <div>\n              <Label>Smoking</Label>\n              <Select>\n                <SelectTrigger data-testid=\"smoking-select\"><SelectValue placeholder=\"Status\"/></SelectTrigger>\n                <SelectContent>\n                  <SelectItem value=\"never\">Never</SelectItem>\n                  <SelectItem value=\"former\">Former</SelectItem>\n                  <SelectItem value=\"current\">Current</SelectItem>\n                </SelectContent>\n              </Select>\n            </div>\n            <div>\n              <Label>Exercise</Label>\n              <Select>\n                <SelectTrigger data-testid=\"exercise-select\"><SelectValue placeholder=\"Frequency\"/></SelectTrigger>\n                <SelectContent>\n                  <SelectItem value=\"low\">Low</SelectItem>\n                  <SelectItem value=\"moderate\">Moderate</SelectItem>\n                  <SelectItem value=\"high\">High</SelectItem>\n                </SelectContent>\n              </Select>\n            </div>\n            <div>\n              <Label>Blood Pressure</Label>\n              <Input data-testid=\"bp-input\" placeholder=\"e.g., 120/80\"/>\n            </div>\n            <div>\n              <Label>Cholesterol</Label>\n              <Input data-testid=\"chol-input\" placeholder=\"mg/dL\"/>\n            </div>\n            <div>\n              <Label>Diabetes</Label>\n              <Select>\n                <SelectTrigger data-testid=\"diabetes-select\"><SelectValue placeholder=\"No/Yes\"/></SelectTrigger>\n                <SelectContent>\n                  <SelectItem value=\"no\">No</SelectItem>\n                  <SelectItem value=\"yes\">Yes</SelectItem>\n                </SelectContent>\n              </Select>\n            </div>\n            <div>\n              <Label>Chest Pain Type</Label>\n              <Select>\n                <SelectTrigger data-testid=\"cp-select\"><SelectValue placeholder=\"Type\"/></SelectTrigger>\n                <SelectContent>\n                  <SelectItem value=\"typical\">Typical angina</SelectItem>\n                  <SelectItem value=\"atypical\">Atypical angina</SelectItem>\n                  <SelectItem value=\"non-anginal\">Non-anginal pain</SelectItem>\n                  <SelectItem value=\"asymptomatic\">Asymptomatic</SelectItem>\n                </SelectContent>\n              </Select>\n            </div>\n            <div className=\"md:col-span-2\">\n              <Label>ECG Result</Label>\n              <Input data-testid=\"ecg-input\" placeholder=\"e.g., Normal\"/>\n            </div>\n          </div>\n          <div>\n            <Label>Symptoms</Label>\n            <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2\">\n              {['Shortness of breath','Fatigue','Dizziness','Sweating'].map((s,i)=> (\n                <label key={i} className=\"inline-flex items-center gap-2\">\n                  <Checkbox data-testid=\"symptom-checkbox\"/> <span className=\"text-sm\">{s}</span>\n                </label>\n              ))}\n            </div>\n          </div>\n          <div className=\"flex items-center justify-between\">\n            <label className=\"inline-flex items-center gap-2 text-sm\">\n              <Switch data-testid=\"consent-switch\"/> I consent to camera processing for vitals\n            </label>\n            <Button data-testid=\"submit-risk-form-button\" onClick={()=>toast('Submitting...')}>Calculate Risk</Button>\n          </div>\n        </Card>\n        <Card className=\"xl:col-span-2 p-6 space-y-4\">\n          <h3 className=\"font-[var(--font-heading)] text-lg\">Webcam & Live Vitals</h3>\n          {/* Mount <WebcamCapture/> and live metric chips here */}\n          <div className=\"grid grid-cols-3 gap-3\">\n            {[{k:'Heart',v:72,u:'bpm'},{k:'Resp',v:14,u:'rpm'},{k:'Stress',v:0.31,u:''}].map((m,i)=> (\n              <div key={i} data-testid=\"vital-chip\" className=\"rounded-xl border p-3 text-center\">\n                <div className=\"text-xs text-gray-500\">{m.k}</div>\n                <div className=\"font-[var(--font-numeric)] text-2xl\">{m.v}<span className=\"text-sm ml-1\">{m.u}</span></div>\n              </div>\n            ))}\n          </div>\n        </Card>\n      </div>\n      <Toaster position=\"top-right\"/>\n    </div>\n  );\n}",

    "results_page_scaffold.jsx": "import { Card } from './components/ui/card';\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';\nimport { Alert } from './components/ui/alert';\nexport default function ResultsPage(){\n  const risk = 76;\n  const band = risk >= 70 ? 'high' : risk >= 40 ? 'med' : 'low';\n  return (\n    <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8\">\n      {band==='high' && (\n        <div data-testid=\"high-risk-alert-banner\" className=\"mb-6 rounded-lg border bg-red-50 text-red-700 p-4\">High risk detected. Please consult a medical professional immediately.</div>\n      )}\n      <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-6\">\n        <Card className=\"lg:col-span-2 p-6\">\n          <h2 className=\"font-[var(--font-heading)] text-xl mb-2\">Risk Assessment</h2>\n          {/* <RiskGauge value={risk}/> */}\n          <div data-testid=\"risk-percent-display\" className=\"font-[var(--font-numeric)] text-5xl mt-4\">{risk}%</div>\n          <div className=\"mt-2 text-sm\">Band: <span className=\"capitalize\">{band}</span></div>\n        </Card>\n        <Card className=\"p-6\">\n          <h3 className=\"font-[var(--font-heading)] text-lg\">Legend</h3>\n          <ul className=\"mt-2 space-y-2 text-sm\">\n            <li><span className=\"inline-block w-3 h-3 rounded-full mr-2 bg-[color:var(--risk-low)]\"/> Low (0–39%)</li>\n            <li><span className=\"inline-block w-3 h-3 rounded-full mr-2 bg-[color:var(--risk-med)]\"/> Medium (40–69%)</li>\n            <li><span className=\"inline-block w-3 h-3 rounded-full mr-2 bg-[color:var(--risk-high)]\"/> High (70–100%)</li>\n          </ul>\n        </Card>\n      </div>\n      <Tabs defaultValue=\"overview\" className=\"mt-8\">\n        <TabsList>\n          <TabsTrigger data-testid=\"tab-overview\" value=\"overview\">Overview</TabsTrigger>\n          <TabsTrigger data-testid=\"tab-explain\" value=\"explain\">Explanation</TabsTrigger>\n          <TabsTrigger data-testid=\"tab-tips\" value=\"tips\">Tips</TabsTrigger>\n        </TabsList>\n        <TabsContent value=\"overview\">Personalized recommendations appear here.</TabsContent>\n        <TabsContent value=\"explain\">{/* SHAP-like visualization placeholder */}</TabsContent>\n        <TabsContent value=\"tips\">Lifestyle suggestions grid.</TabsContent>\n      </Tabs>\n    </div>\n  );\n}"
  },

  "libraries": {
    "install": [
      "npm i d3",
      "npm i framer-motion",
      "npm i react-webcam",
      "npm i recharts",
      "npm i lucide-react"
    ],
    "usage_notes": [
      "Use D3 for custom gauge and SHAP-like beeswarm.",
      "Framer Motion for entrance and subtle hover animations only on interactive or hero art (no transition: all).",
      "react-webcam for camera stream; ensure permission prompt copy is reassuring.",
      "Recharts optional for simple RadialBar as a fallback when D3 is too heavy.",
      "Use lucide-react for icons (e.g., HeartPulse, Camera)."
    ]
  },

  "accessibility": {
    "contrast": "Ensure WCAG AA for text on backgrounds. Primary on white AA. Risk colors used in badges also include text and border for recognition.",
    "motion_pref": "Respect prefers-reduced-motion: disable parallax and non-essential animation.",
    "focus": "Always visible focus rings using ring-[color:var(--ring)] ring-2.",
    "aria": "Label video controls, gauge (aria-valuenow), and explain charts with alt descriptions.",
    "forms": "Associate labels with inputs; provide helper text; validate inline."
  },

  "testing_attributes": {
    "rule": "All interactive or critical info elements MUST include data-testid with kebab-case describing role.",
    "examples": [
      "data-testid=\"start-assessment-button\"",
      "data-testid=\"submit-risk-form-button\"",
      "data-testid=\"webcam-video\"",
      "data-testid=\"risk-percent-display\"",
      "data-testid=\"high-risk-alert-banner\""
    ]
  },

  "image_urls": [
    {
      "url": "https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?crop=entropy&cs=srgb&fm=jpg&q=85",
      "category": "hero-art",
      "placement": "Home hero right column image (max-height: 520px)",
      "description": "Pastel abstract anatomical heart to set a creative, reassuring tone"
    },
    {
      "url": "https://images.unsplash.com/photo-1704648163360-b067a520bed1?crop=entropy&cs=srgb&fm=jpg&q=85",
      "category": "section-divider",
      "placement": "Subtle clipped background in How-it-works with 8% opacity",
      "description": "Warm watercolor texture for decorative wash"
    },
    {
      "url": "https://images.pexels.com/photos/9162030/pexels-photo-9162030.jpeg",
      "category": "explanations-header",
      "placement": "Explanations page header beside title",
      "description": "Minimal brain + heart illustration reinforcing explainability theme"
    }
  ],

  "motion": {
    "entrance": {
      "card": "opacity-0 translate-y-2 -> opacity-100 translate-y-0 over 220ms",
      "hero_text": "fade+rise 280ms with slight delay",
      "gauge": "needle draws with 420ms ease"
    },
    "scroll": {
      "hero_parallax": "Translate decorative shapes by up to 20px on scroll; disable when prefers-reduced-motion"
    }
  },

  "iconography": {
    "library": "lucide-react",
    "examples": ["HeartPulse", "Camera", "Info", "Sparkles"],
    "usage": "Size 18–24px, stroke-2. Use role=img and aria-label"
  },

  "gradients_usage": {
    "areas_allowed": ["Hero background wash", "Large section dividers", "Decorative overlays only"],
    "areas_avoid": ["Text-heavy content blocks", "Small UI elements <100px", "Buttons"],
    "enforcement": "If gradient coverage exceeds 20% viewport or impacts readability, fallback to solid colors"
  },

  "navigation": {
    "header": "Use navigation-menu, include links: Home, Assess, Results, About, Explanations, Tips, Contact",
    "cta": "Right-aligned Start Assessment button with data-testid=\"nav-start-assessment-button\""
  },

  "seo_copy": {
    "hero_h1": "Early Heart Attack Risk, Assessed in Minutes",
    "hero_sub": "Answer a few questions, allow a quick camera check, and get a clear, explainable risk score—with actionable steps."
  },

  "implementation_notes": {
    "tailwind_tokens": "Add :root custom properties in src/index.css to reflect the tokens.colors. Map shadcn HSL tokens to these hex values if needed.",
    "charts": "Prefer D3 for bespoke visuals. Provide Recharts fallback for SSR constraints.",
    "data_persistence": "Store last assessment locally for demo (localStorage) with user consent.",
    "forms_library": "Use shadcn/ui form primitives with react-hook-form if available; otherwise manual state."
  },

  "instructions_to_main_agent": [
    "Adopt the tokens and replace existing :root vars in src/index.css. Keep dark theme tokens aligned for contrast.",
    "Build pages in the order: Home -> RiskForm -> Results -> About -> Explanations -> Tips -> Contact.",
    "Use only shadcn/ui for interactive primitives (select, dropdown, calendar if added, toasts).",
    "Add data-testid to every button, input, select, checkbox, tab, alert, metric chip, and key readouts.",
    "Implement hero gradient as CSS var --hero-grad and ensure gradient covers <20% of viewport.",
    "Include noise overlay element in hero and major banners for subtle texture.",
    "Use lucide-react icons only (no emoji).",
    "Respect mobile-first: stack columns, reduce parallax, simplify charts on <640px.",
    "No transition: all anywhere. Scope transitions to color/opacity/transform per element.",
    "If a calendar is ever needed (follow-ups), use ./components/ui/calendar"
  ],

  "appendix_examples": {
    "nav_jsx": "<header class=\"sticky top-0 z-50 border-b bg-[color:var(--surface)]/85 backdrop-blur\"><div class=\"max-w-7xl mx-auto h-14 flex items-center justify-between px-4\">...\n<button data-testid=\"nav-start-assessment-button\" class=\"...\">Start Assessment</button></div></header>",
    "hero_jsx": "<section class=\"relative pt-24 pb-16 overflow-hidden\" style=\"--hero-grad: linear-gradient(135deg, rgba(198,247,226,.45), rgba(224,242,255,.45), rgba(255,229,217,.45))\"><div class=\"absolute inset-0\" style=\"background:var(--hero-grad)\"></div><div class=\"relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8\">...</div><div class=\"noise-overlay\"></div></section>"
  },

  "general_ui_ux_design_guidelines": "- You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n- You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n- NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals."
}
