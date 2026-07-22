# Upasana Tailor — Developer Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS v4. Showcases my skills, experience, certifications, and featured projects as a Aspiring SOC Analyst | Software Engineer (Cloud & AI Infrastructure) | Google Cybersecurity Certified.

🌐 **Live site:** [upasana-portfolio.vercel.app](https://portfolioupasana.vercel.app/)

---

## Sections

- **About** — Introduction, contact info, and social links
- **Technical Expertise** — AI/ML, DevOps & Cloud, and Full-Stack skills
- **Language Proficiency** — German (B2), English (C1), Hindi (Native)
- **Certifications & Training** — Certified Full-Stack Developer Trainer & DevOps Trainer
- **Work History** — Professional experience timeline
- **Featured Projects** — Highlighted technical projects with links
- **Education** — Academic background

---

## Tech Stack

| Technology | Version |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Lucide React | 0.460 |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/
│   └── profile.jpg        # Profile photo
├── App.jsx                # Main component (all sections)
├── App.css                # Component styles
├── index.css              # Global styles + Tailwind import
└── main.jsx               # React entry point
```

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import this repo
4. Set **Root Directory** to `portfolio` if prompted
5. Click **Deploy**

Vercel auto-detects Vite and configures everything. You get a free `*.vercel.app` URL instantly.

---

## Customisation

To update with your own details, edit the data arrays at the top of `src/App.jsx`:

- `skills` — your technical skills by category
- `experience` — work history entries
- `projects` — featured project cards

To replace the profile photo, add your image to `src/assets/` and update the import in `App.jsx`.

---

## License

MIT — feel free to use this as a template for your own portfolio.
