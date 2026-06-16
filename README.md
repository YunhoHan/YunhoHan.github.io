# Yun-Ho Han Personal Academic Homepage

This repository contains the personal academic homepage and CV of **Yun-Ho Han**, a Ph.D. candidate in the Department of Mechanical System Engineering at Kookmin University.

The website is built as a static GitHub Pages site and is intended to present research experience, publications, projects, demonstrations, and CV materials related to humanoid robotics.

Website:

```text
https://yunhohan.github.io
```

---

## Overview

This homepage introduces Yun-Ho Han's research in humanoid robotics, including:

* Humanoid robot design
* Legged locomotion and bipedal walking
* Model-based walking control using WBC and MPC
* Differential transmission mechanisms
* ADAPT Hip Pitch–Knee differential mechanism
* Mechanism-aware reinforcement learning-based walking control
* Sim-to-real and sim-to-sim validation
* Single-leg jumping motion planning

The site is designed to show the research history from **RoK-3** to **RoK-4**, rather than focusing only on the most recent work.

Main research flow:

```text
RoK-3 Humanoid Robot
→ Model-based walking control using WBC and MPC
→ RoK-4 Humanoid Robot
→ ADAPT Hip Pitch–Knee Differential Mechanism
→ Mechanism-Aware Reinforcement Learning Walking
→ Single-Leg Jumping Motion Planning
```

---

## Current Status

Current version:

```text
Homepage version: v2.16
CV versions: English CV v1.1 / Korean CV v1.0
English CV PDF filename: Yunho_Han_CV_EN_v1_1.pdf
Korean CV PDF filename: Yunho_Han_CV_KR_v1_0.pdf
```

The English and Korean CV PDF filenames match their CV content versions.

Implemented:

* Static GitHub Pages homepage
* English/Korean language switching
* Hero section with subtle RoK-3/RoK-4 robot background imagery
* Profile portrait in the hero section
* English CV PDF linked from homepage
* HTML CV page with CDN contact icons
* Korean HTML CV page
* English CV PDF regenerated from the HTML CV page
* English CV v1.1 label shown in the HTML/PDF CV footer
* Korean CV PDF generated from the Korean HTML CV page
* Korean CV v1.0 label shown in the HTML/PDF CV footer
* Research sections from RoK-3 to RoK-4
* Separate RoK-3 and RoK-4 representative image cards in the Research Projects section
* Publications section grouped by journal and conference papers
* DOI buttons for homepage publications with confirmed DOI links
* YouTube buttons for publication videos
* Research projects section grouped by RoK-4 and RoK-3 without video buttons
* Videos and demonstrations section grouped by RoK-4 and RoK-3, with side-by-side desktop layout
* YouTube thumbnail previews in the Videos and Demonstrations section
* CDN icon and text links for email, GitHub, LinkedIn, and Google Scholar
* CV availability status labels
* Contact links for email, GitHub, LinkedIn, and Google Scholar
* `.nojekyll` marker file for GitHub Pages

To be added later:

* ADAPT mechanism images
* More video links, thumbnails, or embedded demonstrations
* More detailed publication buttons such as Code / Project

Update notes:

```text
v2.16
- Restored the compact hero portrait layout so the profile photo and name sit side by side, with the introductory text below.

v2.15
- Reordered the RoK-3 video thumbnails in reverse chronological order based on the dates in the YouTube titles.

v2.14
- Adjusted the hero portrait layout so the full introductory text block sits beside the profile image.

v2.13
- Added a profile portrait to the homepage hero section using `assets/images/profile/yunho-han.jpg`.

v2.12
- Added the RoK-4 full-mechanism MuJoCo simulation YouTube link to Videos and Demonstrations.
- Removed video and DOI action buttons from Research Projects so media links stay in the demo/publication sections.
- Split RoK-3 and RoK-4 representative images into standalone project image cards.

v2.11
- Reduced the hero section height so the following About section is easier to discover on desktop.
- Added subtle RoK-3 and RoK-4 robot imagery to the hero background.
- Added a compact "Explore research" / "연구 살펴보기" cue linking to the About section.

v2.10
- Added a Korean HTML CV page at `cv_ko.html`.
- Generated the Korean CV PDF as `Yunho_Han_CV_KR_v1_0.pdf`.
- Updated the homepage CV section with English/Korean PDF and HTML CV buttons.
- Updated README status so Korean CV is marked as available.

v2.9
- Renamed the English CV PDF file to `Yunho_Han_CV_EN_v1_1.pdf` so the filename matches English CV v1.1.
- Updated homepage PDF links and README references to use the v1.1 PDF filename.
- Added the English CV v1.1 label to the HTML/PDF CV footer.

v2.8
- Regenerated the English CV PDF from `cv.html` so the HTML and PDF versions match.
- Rebuilt the PDF from the HTML CV page before the filename version cleanup.

v2.7
- Reorganized Research Projects into larger RoK-4 and RoK-3 framed groups.
- Added RoK-3 project cards for Whole-Body and Model Predictive Control and Foot Design.
- Updated Videos and Demonstrations to use a RoK-4 1-column group and RoK-3 2-column thumbnail group on desktop.

v2.6
- Added representative RoK-3 and RoK-4 images to the Research Projects section.
- Added an `assets/images/` folder structure for robot media.
- Renamed uploaded image files to web-friendly lowercase filenames without spaces.

v2.5
- Grouped the Videos and Demonstrations section into larger RoK-4 and RoK-3 framed blocks.
- Renamed the RoK-4 walking demo to "RoK-4 RL-based real-world walking".
- Replaced generic RoK-3 video labels with the original YouTube video titles.

v2.4
- Removed the standalone reinforcement learning demo placeholder from the Videos and Demonstrations section.
- Kept learning-progress media as an optional future addition only when a clear training or policy-behavior video is available.

v2.2
- Added CDN contact icons to the HTML CV page.
- Updated the documented HTML CV status to English CV v1.1.

v2.1
- Replaced text-only social badges with CDN icons from Font Awesome and Academicons.
- Kept text labels next to each icon for clarity and accessibility.

v2.0
- Added icon-style text links for Email, GitHub, LinkedIn, and Google Scholar in the hero and contact sections.
- Increased the top navigation and Yun-Ho Han brand text size.

v1.9
- Added clickable YouTube thumbnail previews to the Videos and Demonstrations section.
- Kept project and publication links as compact text buttons.

v1.8
- Reordered homepage sections to place Videos / Demos before Publications.
- Added YouTube buttons to Research Projects cards for RoK-4, ADAPT, Model-Based Walking, RoK-3, and Single-Leg Jumping.
- Added YouTube buttons to Videos / Demos cards where media links are available.

v1.7
- Renamed homepage project and publication headings to "Research Projects" and "Publications".
- Simplified matching CV section headings.

v1.6
- Added YouTube buttons to the Slope Walking and 2018 Ski Robot Challenge homepage publication entries.
- Updated the IROS 2022 homepage publication YouTube link.

v1.5
- Added YouTube buttons to the Humanoids 2023 and IROS 2022 homepage publication entries.

v1.4
- Renamed the ADAPT publication Video button to YouTube.

v1.3
- Added a YouTube button to the ADAPT homepage publication entry.

v1.2
- Added DOI buttons to homepage publications with confirmed DOI links.
- Added the IROS 2022 DOI to the HTML CV publication entry.

v1.1
- Added `.nojekyll` to match the documented GitHub Pages structure.
- Grouped homepage publications into Journal Papers and Conference Papers.
- Added initial CV availability labels for the homepage CV section.
- Reworked the Videos / Demos placeholder into individual demo cards.
```

---

## Repository Structure

```text
YunhoHan.github.io/
├── index.html
├── cv.html
├── cv_ko.html
├── assets/
│   ├── style.css
│   ├── script.js
│   ├── cv.css
│   └── images/
│       ├── profile/
│       │   └── yunho-han.jpg
│       ├── rok3/
│       │   └── rok3-biped-and-humanoid.png
│       └── rok4/
│           ├── rok4-humanoid.png
│           └── rok4-with-hammer.png
├── documents/
│   ├── Yunho_Han_CV_EN_v1_1.pdf
│   └── Yunho_Han_CV_KR_v1_0.pdf
├── README.md
└── .nojekyll
```

### Main Files

```text
index.html
```

Main homepage.

Contains:

* Home
* About
* Research
* Projects
* Videos / Demos
* Publications
* CV
* Contact

```text
cv.html
```

English HTML version of the CV.

```text
cv_ko.html
```

Korean HTML version of the CV.

```text
assets/style.css
```

Main homepage styling.

```text
assets/script.js
```

Language switching logic and mobile navigation behavior.

```text
assets/cv.css
```

CV page styling.

```text
assets/images/
```

Robot and project media used by the homepage.

```text
documents/Yunho_Han_CV_EN_v1_1.pdf
```

English CV PDF linked from the homepage.

```text
documents/Yunho_Han_CV_KR_v1_0.pdf
```

Korean CV PDF linked from the homepage.

---

## Website Sections

The homepage currently uses the following sections:

```text
Home
About
Research
Projects
Videos / Demos
Publications
CV
Contact
```

### Home

The hero section introduces Yun-Ho Han as a humanoid robotics researcher.

### About

Summarizes the research history from RoK-3 to RoK-4.

### Research

Lists core research interests.

### Projects

Current project groups:

RoK-4:

* RoK-4 image card
* RoK-4 Humanoid Robot
* Mechanism-Aware RL Walking
* ADAPT Differential Mechanism
* Single-Leg Jumping Motion Planning

RoK-3:

* RoK-3 image card
* RoK-3 Humanoid Robot
* Model-Based Humanoid Walking
* Whole-Body and Model Predictive Control
* Foot Design

Project cards describe the research only. Video links are kept in the Videos / Demos section, and DOI links are kept in the Publications section.

### Videos / Demos

Shows clickable YouTube thumbnail previews for available videos and organizes them by robot platform. On desktop, RoK-4 appears as a 1-column group and RoK-3 appears as a 2-column thumbnail group.

Current demo groups:

RoK-4:

* RoK-4 RL-based real-world walking
* RoK-4 full-mechanism MuJoCo simulation
* ADAPT differential mechanism demonstration
* Single-leg jumping motion generation

RoK-3:

* 8 YouTube thumbnail previews using the original video titles
* Ordered newest first by the dates shown in the YouTube titles

### Publications

Shows publications grouped into:

* Journal Papers
* Conference Papers

Also links to the full publication list on Google Scholar.

DOI and YouTube buttons are shown where links are available.

### CV

Links to:

* English CV PDF
* HTML CV

The section also shows availability labels for English PDF, HTML CV, and Korean CV.

### Contact

Includes:

* Email
* GitHub
* LinkedIn
* Google Scholar

---

## CV Information

The current English CV includes:

* Research Profile
* Research Interests
* Education
* Research Experience
* Research Projects
* Publications
* Awards and Honors
* Technical Skills
* Demonstrations
* References

Important CV decisions:

```text
Research Experience: 2018 – Present
M.S.: February 2020
B.S.: February 2018
Expected Ph.D. Graduation: August 2026
```

Technical Skills section:

```text
Robotics, Control, and Learning
- Humanoid robot design
- Legged locomotion control
- Whole-body control
- Model predictive control
- Torque-control-based walking
- Reinforcement learning-based control
- Trajectory optimization
- Nonlinear trajectory optimization
- Kinodynamic motion planning
- Sim-to-real validation
- Sim-to-sim validation

Simulation Tools
- Isaac Gym
- MuJoCo
- Gazebo

Programming and Engineering Tools
- Python
- C/C++
- MATLAB
- ROS / ROS 2
- Git / GitHub
- Linux / Ubuntu
- SolidWorks
- LaTeX
```

---

## Publications Included in CV

### International Journal Papers

1. Yun-Ho Han, Min-Ho Park, and Baek-Kyu Cho,
   “ADAPT: Advanced Differential and Agile Parallel Transmission Mechanism for High-Performance Humanoid Robots,”
   IEEE Robotics and Automation Letters, 2026.

2. Junyeon Namgung, Yun-Ho Han, and Baek-Kyu Cho,
   “A Variable Stiffness Sole for Biped Robot and Its Experimental Verification,”
   ASME Journal of Mechanisms and Robotics, 2024.

3. Yun-Ho Han and Baek-Kyu Cho,
   “Slope Walking of Humanoid Robot without IMU Sensor on an Unknown Slope,”
   Robotics and Autonomous Systems, 2022.

4. Yun-Ho Han, Ho-Jin Jeon, and Baek-Kyu Cho,
   “Development of a Humanoid Robot for the 2018 Ski Robot Challenge,”
   International Journal of Precision Engineering and Manufacturing, 2020.

### International Conference Papers

1. Yun-Ho Han and Baek-Kyu Cho,
   “Implementing Torque Control-Based Biped Walking of Humanoid Robots with High Reduction Gear and No Joint Torque Feedback,”
   IEEE-RAS International Conference on Humanoid Robots, 2023.

2. Yun-Ho Han, Junyeon Namgung, and Baek-Kyu Cho,
   “Walking Control Framework on Uneven Terrain Using Variable Stiffness Sole,”
   IEEE/RSJ International Conference on Intelligent Robots and Systems, 2022.

### Domestic Conference / Workshop Papers

1. Yun-Ho Han, So-Yeon Oh, and Baek-Kyu Cho,
   “Humanoid Robot Legs Designed with Four-Bar Link Structure,”
   Korea Robotics Society Annual Conference, 2017.

2. Yun-Ho Han and Baek-Kyu Cho,
   “Walking Humanoid Robot Controlled by Complementary Filter and PD Control,”
   Korea Robotics Society Annual Conference, 2016.

---

## Awards and Honors Included in CV

The CV currently includes only awards personally associated with Yun-Ho Han.

Included:

1. Best Paper Award, Dynamics and Control / Robotics Division, Spring Conference of the Korean Society of Mechanical Engineers, 2025.

2. Grand Prize, RED Show, 20th Korea Robotics Society Annual Conference, 2025.

3. Best Paper Award, IT Convergence Division, Spring Conference of the Korean Society of Mechanical Engineers, 2024.

Excluded:

```text
Dronebot Challenge Technology Innovation Award, 2020
```

Reason: Yun-Ho Han did not participate.

Also excluded from the Awards section:

```text
AI Star Fellowship
```

Reason: intentionally removed from the CV awards section.

---

## Language Switching

The homepage currently supports:

```text
EN / KR
```

The language switch changes the homepage text only.

Current status:

```text
English homepage text: available
Korean homepage text: available
English CV PDF: available
Korean CV PDF: available
English HTML CV: available
Korean HTML CV: available
```

---

## How to Deploy with GitHub Pages

1. Create a GitHub repository named:

```text
YunhoHan.github.io
```

2. Upload or push all files in this repository.

3. Go to:

```text
Settings → Pages
```

4. Set:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

5. Open:

```text
https://yunhohan.github.io
```

---

## How to Work Locally

Clone the repository:

```bash
git clone https://github.com/YunhoHan/YunhoHan.github.io.git
cd YunhoHan.github.io
code .
```

After editing files:

```bash
git add .
git commit -m "Update homepage"
git push
```

GitHub Pages will automatically update after the push.

---

## Recommended Future Work

### 1. Add More Images

Already added:

```text
assets/images/rok3/rok3-biped-and-humanoid.png
assets/images/rok4/rok4-humanoid.png
assets/images/rok4/rok4-with-hammer.png
assets/images/profile/yunho-han.jpg
```

Still useful to add later:

```text
assets/images/adapt/adapt-mechanism.jpg
assets/images/rok4/rok4-mujoco.jpg
assets/images/jumping/single-leg-jumping.jpg
```

Suggested use:

* Hero section: RoK-4 representative image
* Project cards: ADAPT and jumping images
* Videos section: thumbnails or GIFs

### 2. Add More Videos or Embeds

Already linked:

* RoK-3 humanoid walking videos
* RoK-4 RL-based real-world walking
* RoK-4 full-mechanism MuJoCo simulation
* ADAPT mechanism demonstration
* Model-based humanoid walking / torque-control-based walking
* Slope walking
* 2018 Ski Robot Challenge
* Single-leg jumping motion
* Publication videos where available

Still to add:

* Optional learning-progress clips, if they clearly show training or policy behavior

Possible future formats:

* YouTube links
* Embedded videos
* GIF thumbnails
* Local MP4 files, if file size is acceptable

### 3. Add Additional Publication Action Buttons

The homepage publications section is already grouped by:

```text
Journal Papers
Conference Papers
```

Future improvements:

```text
[Code] [Project]
```

A Domestic Papers subsection may be added later if those papers should appear directly on the homepage.

### 4. Improve Korean CV When Needed

The Korean CV is now available as:

```text
cv_ko.html
documents/Yunho_Han_CV_KR_v1_0.pdf
```

Future Korean CV improvements may include terminology cleanup, additional Korean descriptions, or a revised `v1_1` release.

### 5. Improve Mobile Layout

Check:

* Navigation menu
* Language switch
* Project cards
* Publication list
* CV buttons

---

## Notes for Codex or Future AI Assistance

This repository is for Yun-Ho Han's personal academic homepage and CV.

Before making changes, read:

```text
README.md
index.html
cv.html
assets/style.css
assets/script.js
assets/cv.css
```

Do not remove the overall structure unless explicitly requested.

Important design goals:

* Clean academic homepage
* Suitable for robotics Ph.D. candidate
* English/Korean language support
* Research history from RoK-3 to RoK-4
* Strong emphasis on humanoid robotics, ADAPT, and mechanism-aware reinforcement learning
* CV PDF linked from homepage
* Easy to update with images and videos later

When adding new content, preserve the current tone:

* Professional
* Academic
* Robotics-focused
* Concise
* Suitable for both research institutes and robotics companies

---

## Contact

Yun-Ho Han
Ph.D. Candidate, Department of Mechanical System Engineering
Kookmin University, Seoul, Republic of Korea

Email:

```text
93yunho@gmail.com
93yunho@kookmin.ac.kr
```

Links:

```text
GitHub: https://github.com/YunhoHan
LinkedIn: https://www.linkedin.com/in/yunho-han-4357352a2
Google Scholar: https://scholar.google.com/citations?user=bfGxfZUAAAAJ
Website: https://yunhohan.github.io
```

## Maintenance Rule

Whenever the homepage, CV, publications, awards, links, images, videos, or project descriptions are updated, this `README.md` should also be updated accordingly.

The README is used as the project context for future editing, Codex assistance, and AI-assisted development. Keeping it synchronized with the actual website prevents outdated information and helps future work continue smoothly.

Recommended update checklist:

```text
When updating the website, also check:
- Homepage text
- CV PDF filename and link
- HTML CV content
- Publications list
- Awards and honors
- Project descriptions
- Image and video file paths
- External links
- Language switch text
- Current status section in README
```

If a major update is made, add a short note to the README, for example:

```text
Update note:
- Added RoK-4 images to project cards.
- Updated English CV from v1.0 to v1.1.
- Added Korean CV PDF.
```

Before pushing changes, review the diff and write a commit message that summarizes the actual update. Commit messages may be drafted with Codex or an AI assistant, but they should be manually reviewed before committing.

## Language Rule for AI Assistance

When using Codex, ChatGPT, or any AI assistant to work on this repository, responses and explanations should be written in **Korean** by default.

Reason:

```text
The owner of this repository is Korean and prefers Korean explanations during development and editing work.
```

Code, file names, commit messages, HTML class names, CSS variables, and technical identifiers may remain in English when appropriate.

Recommended response style:

```text
- Explain changes in Korean.
- Keep code comments in English or Korean depending on the file context.
- Keep website content in English/Korean according to the existing language-switching structure.
- Do not translate technical terms unnecessarily when English terms are clearer.
- When modifying public-facing English content, preserve natural academic English.
```
