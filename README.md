# Shashikant Kant - Personal Brand Portfolio Website

This is a static, production-ready portfolio website for a senior Growth Marketing / Digital Marketing professional. It is designed to work on GitHub Pages first and later move to a custom domain.

## 1. Website strategy summary

The website treats the professional profile as a brand portfolio.

- Master brand: Shashikant Kant
- Product categories: Digital marketing capability areas
- SKUs: Projects, roles, case studies, frameworks, services and measurable achievements
- Audience paths: Recruiters, learners and advisory/consulting clients

The homepage is not a resume dump. It is a brand showroom that routes each visitor to the most relevant proof:

- Recruiters get resume, career timeline, skills and enterprise proof.
- Learners get frameworks, LinkedIn thought leadership and research placeholders.
- Consulting clients get services, problems solved, case studies and contact path.

## 2. Site map

- Home / Hero
- Audience Gateway
- Brand Portfolio / SKU Matrix
- Case Studies
- Research and Framework Hub
- Consulting / Advisory Services
- Resume Snapshot
- Professional Exposure / Brand Chips
- Contact Form
- Footer

## 3. Content architecture

### Hero
Positions Shashikant as a Growth Marketing Architect connecting Search, eCommerce, Paid Media, SEO, SEM, Analytics, Content, Agency Governance and Customer Acquisition.

### Audience Gateway
Interactive JavaScript section with three audience modes:

- Recruiter
- Learner
- Business Owner / Consulting Client

### Portfolio / SKU Matrix
Filterable project and capability cards organized by:

- Performance Marketing
- eCommerce and Online Stores
- Search and SEO Strategy
- Analytics and Marketing Intelligence
- Agency and Governance
- Traditional Marketing and 360 Advertising

### Case Studies
Expandable case studies based on resume-supported roles and outcomes:

- Beauty paid search efficiency
- SEO and organic traffic recovery
- H&M regional performance media
- Thirdwave SEO ranking and CTR growth
- Google Play merchandising and APAC growth
- IBM demand generation and B2B execution

### Framework Hub
Framework cards with placeholder PDF links and LinkedIn links. Replace the placeholders with exact LinkedIn post URLs and uploaded PDFs.

### Consulting
Service cards translate capabilities into advisory offerings:

- SEO audit and growth roadmap
- Paid search / SEM performance diagnosis
- eCommerce growth strategy
- Agency performance review
- APAC market search strategy
- Content and search intent mapping
- Measurement and reporting framework
- Affiliate / partner marketing process design

## 4. Design system summary

- Aesthetic: Premium dark mode, SaaS landing page + executive portfolio style
- Colors: Deep navy background, light blue accent, warm gold accent
- Layout: Responsive grid, card-based structure, sticky navigation
- Interactions: Typing text, audience tabs, portfolio filters, modals, accordions, form validation
- Accessibility: Skip link, semantic headings, ARIA labels, keyboard-friendly modal, visible focus states
- SEO: Meta title, meta description, Open Graph, Twitter Card, JSON-LD Person and ProfessionalService schema

## 5. Files

```text
index.html
styles.css
script.js
portfolio-data.js
README.md
assets/
  resumes/
    shashikant-resume-english-detailed.pdf
    shashikant-japanese-shokumukeirekisho.pdf
    shashikant-master-resume-english.docx
    shashikant-resume-english-2page.docx
    shashikant-resume-japanese-2page.docx
  research/
    [add-framework-pdfs-here]
  images/
    [add-profile-photo-here]
  social/
    [add-og-image.png-here]
```

## 6. How to upload to GitHub

1. Create a new GitHub repository, for example `shashikant-portfolio`.
2. Upload all files and folders from this package to the root of the repository.
3. Make sure `index.html` is in the root, not inside another folder.
4. Commit the files.

## 7. How to enable GitHub Pages

1. Open the GitHub repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, select:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Save.
6. GitHub will show the live URL after deployment.

## 8. Items to replace before public launch

- Replace `https://[your-domain]/` with your GitHub Pages URL or custom domain.
- Replace `[Add Facebook URL]` with your actual Facebook profile/page URL.
- Add a profile photo in `assets/images/` and place it in the hero if desired.
- Add an Open Graph image at `assets/social/og-image.png`.
- Replace placeholder PDF paths in `portfolio-data.js` with real framework/research PDF files.
- Replace general LinkedIn profile links with exact LinkedIn post links for each framework.
- Verify all metrics before publication, especially revenue, ROAS and budget numbers.
- Connect the contact form to Formspree, Netlify Forms, Google Forms or EmailJS.
- Remove or soften any company-specific detail that should not be public.
- Add a privacy note if you connect a real contact form.

## 9. Connecting the contact form later

This static version does not send messages to a backend. It validates input and opens a prepared email link.

Common options:

- Formspree: Add a form endpoint in the `action` attribute and set `method="POST"`.
- Netlify Forms: Add `data-netlify="true"` and deploy through Netlify.
- EmailJS: Add EmailJS SDK and replace the submit handler in `script.js`.
- Google Forms: Create a Google Form and link the CTA button to it.

## 10. Maintenance tips

Most website content is controlled inside `portfolio-data.js`.

To add a new portfolio SKU:

1. Open `portfolio-data.js`.
2. Add a new object to `portfolioItems`.
3. Use one of the existing categories exactly, so the filter works.

To add a new framework:

1. Add a new object to `frameworks`.
2. Add the PDF to `assets/research/`.
3. Replace the LinkedIn URL with the exact LinkedIn post URL.

To add a new service:

1. Add a new object to `services`.
2. Keep the service structure consistent: who it is for, problem solved, deliverable and engagement.
