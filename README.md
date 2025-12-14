# GitGrade  
> **AI-Assisted GitHub Repository Evaluation System**  
> Convert real GitHub repositories into engineering scores, professional feedback, and actionable improvement roadmaps — inspired by how recruiters and mentors review code.

---
## 🎥 Project Demo (Screen Recording)

▶️ Watch the full working demo here deployed in vercel   
https://drive.google.com/file/d/1SeFHSsguwF7mL73O8sPRCwJ4UhEbpvCR/view?usp=drivesdk


## 🧠 Why GitGrade?

A GitHub repository is a developer’s most important asset — yet most students don’t know:
- How their code appears to a recruiter  
- Whether their project follows industry-grade structure  
- What exact steps will improve their repository quality  

**GitGrade acts as a “Repository Mirror”**, reflecting strengths, weaknesses, and next steps using real repository signals.

---

## 🎯 Core Capabilities

- **Deterministic Repository Scoring (0–100)**  
  Rule-based evaluation using measurable GitHub repository signals

- **Engineering Signal Detection**
  - README & documentation quality
  - Folder structure & organization
  - Commit consistency
  - Test presence
  - CI/CD indicators
  - Language & tooling signals

- **AI-Assisted Professional Feedback**
  - Concise recruiter-style summary
  - Honest, mentor-like tone

- **Personalized Improvement Roadmap**
  - 4–6 actionable steps
  - Directly derived from detected gaps

- **Premium UI Dashboard**
  - Clean, modern, enterprise-style UX
  - Clear visualization of results

---

## 🧩 System Design Overview

GitHub Repository URL
↓
GitHub API Data Fetch
↓
Rule-Based Repository Analysis
↓
Deterministic Scoring Engine
↓
AI-Generated Summary & Roadmap
↓
Frontend Results Dashboard

yaml
Copy code

---

## 🤖 Responsible AI Usage

AI is used **only** for:
- Writing natural-language evaluation summaries  
- Generating personalized improvement roadmaps  

**All scoring, evaluation logic, and repository analysis are deterministic and rule-based**, derived directly from GitHub repository data.

This ensures transparency, fairness, and explainability.

---

## 📊 Scoring Criteria

| Dimension | Weight |
|---------|--------|
| Project Structure & Organization | 20% |
| Documentation Quality | 20% |
| Test Presence & Maintainability | 20% |
| Commit Consistency | 15% |
| CI/CD & Automation Signals | 15% |
| Real-World Applicability | 10% |
| **Total** | **100%** |

---

## 🛠 Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | Next.js 15, React 19, Tailwind CSS |
| UI System | shadcn/ui, Framer Motion |
| Language | TypeScript |
| AI | LLM (summary & roadmap generation only) |
| Platform | GitHub, Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm
- Git

### Installation

```bash
git clone https://github.com/Noufalthecoder/Gitgrade-Github-Analyzer.git
cd Gitgrade-Github-Analyzer
npm install
Run Locally
bash
Copy code
npm run dev
Open:

arduino
Copy code
http://localhost:3000
📖 How to Use
Open the web interface

Paste a public GitHub repository URL

Click Analyze Repository

Wait for analysis to complete

Review:

Repository score (0–100)

Skill level (Beginner / Intermediate / Advanced)

Professional evaluation summary

Personalized improvement roadmap

📁 Project Structure
csharp
Copy code
gitgrade/
├── app/                  # Next.js App Router
├── components/           # UI & layout components
├── lib/                  # Utility & helper logic
├── public/               # Static assets
├── styles/               # Global styles
├── package.json
└── README.md
🏁 Hackathon Context
This project was built for the GitGrade Hackathon by UnsaidTalks Education.

Theme:
AI + Code Analysis + Developer Profiling

Focus areas:

Engineering judgement

Logical breakdown

Real-world developer evaluation

Ethical AI usage

🧪 Example Output
vbnet
Copy code
Score: 78 / 100
Level: Intermediate

Summary:
The repository shows clean structure and consistent language usage,
but lacks automated tests and detailed documentation.

Roadmap:
• Add unit tests for core modules  
• Improve README with setup instructions  
• Introduce CI/CD using GitHub Actions  
⚠️ Limitations
Only public repositories are supported

Evaluation is based on available repository signals

This tool does not replace human code reviews

👨‍💻 Author
Mohammed Noufal V
GitHub: https://github.com/Noufalthecoder

📜 License
This project is licensed under the MIT License.

GitGrade is designed to reflect how real engineers evaluate repositories — combining measurable signals with clear, actionable feedback.
