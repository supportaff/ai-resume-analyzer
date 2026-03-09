# 🎯 ResumeIQ - AI Resume Analyzer

> Transform your resume into a job-winning document with AI-powered analysis, LinkedIn optimization, and cover letter generation. Just ₹20, no signup required.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 📄 Resume Analysis
- **ATS Score & Compatibility Check** - Ensure your resume passes automated screening systems
- **Section-by-Section Review** - Get detailed feedback on every part of your resume
- **Bullet Point Rewrites** - Transform vague statements into impact-driven achievements
- **Keyword Gap Analysis** - Identify missing keywords for target roles
- **Structure & Formatting Feedback** - Professional layout recommendations

### 👤 LinkedIn Optimizer
- **5 Headline Variations** - Keyword-rich options tailored to your experience
- **Complete About Section** - Compelling summary that tells your story
- **Experience Descriptions** - Transform resume bullets into LinkedIn format
- **Skills Recommendations** - Top skills to pin and showcase
- **Content Ideas** - 5-10 post ideas to start building your presence

### ✉️ Cover Letter Generator
- **3 Tone Variants** - Corporate, Startup Casual, and Senior Leadership
- **Role-Specific Content** - Tailored to job description and your experience
- **Instant Download** - PDF/DOCX formats ready to use
- **AI-Powered Customization** - Genuine, non-generic letters

### 📈 Growth Roadmap
- **Skill Gap Analysis** - Identify what's missing for your target role
- **Project Recommendations** - Side projects to build your portfolio
- **Certification Suggestions** - Courses and credentials worth pursuing
- **30-Day Action Plan** - Step-by-step improvement roadmap

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Payment:** PayU Gateway
- **AI:** OpenAI/Groq API (configurable)
- **File Parsing:** pdf-parse, mammoth
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- PayU merchant account (test/live)
- OpenAI or Groq API key

### Installation

```bash
# Clone the repository
git clone https://github.com/supportaff/ai-resume-analyzer.git
cd ai-resume-analyzer

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your credentials
# Required: PAYU_MERCHANT_KEY, PAYU_MERCHANT_SALT, OPENAI_API_KEY or GROQ_API_KEY

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# PayU Configuration
PAYU_MERCHANT_KEY=your_merchant_key
PAYU_MERCHANT_SALT=your_merchant_salt
PAYU_MODE=test # or 'live' for production

# AI Provider (choose one)
OPENAI_API_KEY=sk-...
GROQ_API_KEY=gsk_...

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
ANALYSIS_PRICE=20
```

### PayU Setup

1. Sign up at [PayU India](https://payu.in/)
2. Get your merchant credentials from the dashboard
3. For testing, use PayU test credentials and test cards
4. Switch to live mode for production

### AI Provider Setup

**Option 1: OpenAI**
- Get API key from [OpenAI Platform](https://platform.openai.com/)
- Recommended model: `gpt-4o-mini` (cost-effective)

**Option 2: Groq**
- Get API key from [Groq Console](https://console.groq.com/)
- Recommended model: `llama-3.3-70b` (faster, cheaper)

## 📚 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── terms/             # Terms & Conditions page
│   ├── refund-policy/     # Refund Policy page
│   ├── privacy/           # Privacy Policy page
│   └── api/               # API routes (to be implemented)
│       ├── create-order/   # PayU order creation
│       ├── verify-payment/ # Payment verification
│       └── analyze-resume/ # AI analysis logic
├── components/
│   ├── HeroSection.tsx    # Landing hero with CTA
│   ├── HowItWorks.tsx     # 3-step process
│   ├── Features.tsx       # 4 feature modules
│   ├── Pricing.tsx        # Pricing card
│   ├── CTA.tsx            # Bottom CTA section
│   ├── Footer.tsx         # Site footer
│   └── UploadModal.tsx    # File upload + email modal
├── lib/
│   ├── payu.ts            # PayU integration helpers
│   ├── ai.ts              # AI analysis logic
│   └── parser.ts          # Resume parsing (PDF/DOCX)
├── public/
│   └── uploads/           # Temporary file storage (gitignored)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 📝 Implementation Roadmap

### Phase 1: Frontend (Done ✅)
- [x] Landing page with hero, features, pricing
- [x] Upload modal with drag-and-drop
- [x] Legal pages (Terms, Refund, Privacy)
- [x] Responsive design + animations

### Phase 2: Backend (Next)
- [ ] PayU integration endpoints
- [ ] Resume file parsing (PDF/DOCX)
- [ ] AI analysis pipeline
- [ ] Email delivery (Resend/SendGrid)
- [ ] Database for payments tracking

### Phase 3: Testing & Launch
- [ ] PayU sandbox testing
- [ ] AI prompt optimization
- [ ] Error handling & edge cases
- [ ] Deploy to Vercel
- [ ] Custom domain setup

### Phase 4: Enhancements
- [ ] Multiple resume versions support
- [ ] History page (retrieve past analyses)
- [ ] Interview prep module
- [ ] Multi-language support

## 💳 Payment Flow

1. User uploads resume + enters email
2. Frontend calls `/api/create-order`
3. Backend generates PayU hash and order ID
4. User redirected to PayU payment page
5. After payment, PayU redirects to `/payment-status`
6. Backend verifies payment signature
7. If successful, triggers AI analysis
8. Results emailed + shown on status page

## 🧠 AI Analysis Flow

```
Resume Upload → Parse (PDF/DOCX) → Extract Sections → AI Prompts:
  1. Resume analysis (structure, ATS, gaps)
  2. LinkedIn headline + about
  3. Cover letter (3 variants)
  4. Skill gaps + roadmap
→ Compile JSON → Generate PDF → Send Email + Display
```

## 🔒 Security Features

- All data encrypted in transit (TLS)
- PayU handles payment security (PCI-DSS compliant)
- No card details stored on server
- Resume files auto-deleted after 30 days
- Environment variables for sensitive keys
- Rate limiting on API routes

## 📧 Email Templates

**Success Email:**
- Subject: "Your ResumeIQ Analysis is Ready! 🎉"
- Contains: Download link, summary, next steps

**Failed Payment Email:**
- Subject: "Payment Issue - ResumeIQ"
- Contains: Error details, retry link

## 📊 Analytics (Optional)

- Vercel Analytics (built-in)
- Custom events: uploads, payments, downloads
- No third-party tracking cookies

## 👥 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Custom Server

```bash
# Build for production
npm run build

# Start production server
npm start
```

## ❓ FAQ

**Q: How long does analysis take?**  
A: 30-60 seconds after payment confirmation.

**Q: Can I get a refund?**  
A: Yes, if analysis fails or isn't delivered. See [Refund Policy](/refund-policy).

**Q: Is my resume data secure?**  
A: Yes, encrypted and auto-deleted after 30 days.

**Q: What file formats are supported?**  
A: PDF and DOCX, max 5MB.

**Q: Can I analyze multiple resumes?**  
A: Each analysis is ₹20. No limit on how many you can do.

## 📞 Support

For issues or questions:
- **Email:** support@resumeiq.com
- **GitHub Issues:** [Create an issue](https://github.com/supportaff/ai-resume-analyzer/issues)

## 🚀 Live Demo

Coming soon at [resumeiq.com](https://resumeiq.com)

---

**Built with ❤️ by Team Afforal**  
*Helping professionals land their dream jobs, one resume at a time.*
