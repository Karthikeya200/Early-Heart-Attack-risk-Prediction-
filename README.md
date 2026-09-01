# Early Heart Risk Detect 

A comprehensive web application for early-stage heart attack risk detection using machine learning and real-time vital sign monitoring via webcam integration.

##  Features

### Core Functionality
-  **Comprehensive Risk Assessment**: Multi-factor health data collection
-  **Live Webcam Integration**: Real-time vital sign monitoring (rPPG simulation)
-  **ML Risk Prediction**: Intelligent scoring algorithm analyzing 15+ parameters
-  **Interactive Results**: D3.js gauge visualization with color-coded risk bands
-  **Explainable AI**: Detailed factor attribution showing what drives your score
-  **Data Persistence**: MongoDB storage for assessment history
-  **Responsive Design**: Mobile-first, works on all devices
-  **Creative UI**: Artistic design with soft gradients and elegant typography

### Pages
1. **Home** - Hero section with how-it-works cards
2. **Risk Assessment** - Interactive form + live webcam panel
3. **Results** - Risk gauge, tabs (overview/explanation/tips), download/share
4. **About** - Mission, technology, features
5. **Explanations** - How predictions work, XAI breakdown
6. **Tips** - Heart health recommendations
7. **Contact** - Feedback form

##  Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Tailwind CSS, Shadcn/ui, D3.js, React Router |
| **Backend** | FastAPI, Python 3.9+ |
| **Database** | MongoDB (Motor async driver) |
| **ML** | Scikit-learn (rule-based MVP) |
| **Deployment** | Docker, Kubernetes, Supervisor, Nginx |

##  API Endpoints

### POST `/api/assessment`
Create new risk assessment
```json
{
  "name": "John Doe",
  "age": 55,
  "gender": "male",
  "smoking": "current",
  "exercise": "low",
  "blood_pressure": "150/95",
  "cholesterol": "250",
  "diabetes": "yes",
  "chest_pain": "typical",
  "ecg": "Normal",
  "symptoms": ["Shortness of breath", "Fatigue"],
  "vitals": {
    "heart_rate": 85,
    "respiratory_rate": 18,
    "stress_level": 0.6
  }
}
```

**Response**: Assessment object with `risk_score`, `risk_band`, and `factors` array

### GET `/api/assessment/{id}`
Retrieve specific assessment

### GET `/api/assessments`
List all assessments

##  Risk Calculation

**Weighted Scoring System:**

| Factor | Weight | Criteria |
|--------|--------|----------|
| Age | 5-25% | >40: 5%, >50: 15%, >65: 25% |
| Smoking | 10-20% | Former: 10%, Current: 20% |
| Exercise | 5-15% | Low: 15%, Moderate: 5% |
| Blood Pressure | 10-20% | ≥130: 10%, ≥140: 20% |
| Cholesterol | 10-20% | ≥200: 10%, ≥240: 20% |
| Diabetes | 20% | Yes: 20% |
| Chest Pain | 15% | Typical/Atypical: 15% |
| Symptoms | 3% each | Multiple symptoms compound |

**Risk Bands:**
-  **Low (0-39%)** - Continue healthy habits
-  **Medium (40-69%)** - Lifestyle changes recommended
-  **High (70-100%)** - Immediate medical attention

##  Quick Start

### Prerequisites
- Python 3.9+
- Node.js 16+ & Yarn
- MongoDB running

### Setup
```bash
# Clone repository
git clone <repo-url>
cd early-heart-risk-detect

# Backend
cd backend
pip install -r requirements.txt
cp .env.example .env
uvicorn server:app --reload --port 8001

# Frontend (new terminal)
cd frontend
yarn install
yarn start
```

Visit `http://localhost:3000`

## 📹 Webcam Integration

Uses WebRTC `getUserMedia` API:
1. User grants camera permission
2. Live video preview displayed
3. Simulated vitals calculated every 2s (heart rate: 60-100 bpm, respiratory: 12-20 rpm)
4. Vitals included in assessment payload

**Production**: Integrate real rPPG libraries (OpenCV, signal processing) for accurate vital extraction.

## Design System

**Colors:**
- Primary: `#0FA3B1` (Teal)
- Accent: `#FF8A5B` (Peach)
- Risk Low: `#22C55E`, Medium: `#F59E0B`, High: `#EF4444`

**Typography:**
- Headings: EB Garamond (serif)
- Body: Figtree (sans-serif)
- Numbers: Space Grotesk (monospace)

##  Project Structure
```
/app
├── backend/
│   ├── server.py          # FastAPI app
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route pages
│   │   ├── App.js         # Main app
│   │   └── index.css      # Design tokens
│   ├── public/
│   └── package.json
└── README.md
```

##  Future Enhancements

- [ ] Real ML models (Random Forest, XGBoost) on clinical datasets
- [ ] Actual rPPG implementation for vital sign extraction
- [ ] User authentication & assessment history dashboard
- [ ] Time-series risk tracking
- [ ] Wearable device integration (Fitbit, Apple Watch)
- [ ] Email/SMS alerts for high-risk users
- [ ] Federated learning for privacy-preserving training
- [ ] Mobile app (React Native)

##  Medical Disclaimer

**This application is for informational and educational purposes ONLY.** It should NOT replace professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical concerns.

##  License

MIT License

##  Support

Questions? Use the Contact form in the app or email support@heartrisk.health

---

**Built with ❤️ by the Early Heart Risk Team**
