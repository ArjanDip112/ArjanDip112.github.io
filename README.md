# Arjan Chakrabartty — Personal Portfolio

A responsive, interactive static portfolio designed for GitHub Pages.

## Files
- `index.html` — page structure and content
- `styles.css` — visual system, responsive layout and animations
- `script.js` — navigation, theme switch, scroll reveals, project filters and case-study dialogs
- `assets/profile.jpg` — add your professional photograph here
- `assets/cv.pdf` — add your public CV PDF here

## Before publishing
Search and replace:
1. The public email is configured as `arjan.chbrty@gmail.com`.
2. The LinkedIn profile is configured as `https://www.linkedin.com/in/arjan-chakrabartty/`.
3. No mobile number or residential address is displayed on the website.
4. Confirm your exact job title, employment dates, BUET graduation details, publications and skills.
5. `assets/profile.jpg` is populated with your supplied portrait.
6. Add a public-safe `assets/cv.pdf` only after removing your residential address and mobile number from the PDF. The uploaded CV has deliberately not been copied into the public website package.
7. Review project details. Validate the LTE throughput comparison methodology and remove confidential employer information, network identifiers, site coordinates, screenshots or proprietary data.

The page currently uses a text-based portrait placeholder until `assets/profile.jpg` is added.

## Publish on GitHub Pages
1. Sign in to GitHub as `ArjanDip`.
2. Create a **public** repository named exactly `ArjanDip.github.io`.
3. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
6. After GitHub Pages finishes publishing, visit `https://arjandip.github.io`.

## Local preview
Open `index.html` in a browser. For a more reliable local preview, run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Notes
- No build step or package installation is required.
- Google Fonts are loaded from Google Fonts; if unavailable, system sans-serif fallbacks are used.
- The contact email and CV links are placeholders until you add your own files.
- This is a static portfolio, not a backend contact form. The email link opens the visitor's email application.
