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
Homepage version: v1.3
CV version: English CV v1.0
```

Implemented:

* Static GitHub Pages homepage
* English/Korean language switching
* English CV PDF linked from homepage
* HTML CV page
* Research sections from RoK-3 to RoK-4
* Structured selected publications section grouped by journal and conference papers
* DOI buttons for selected homepage publications with confirmed DOI links
* Video button for the ADAPT publication
* Selected research projects section
* Videos and demonstrations placeholder card section
* CV availability status labels
* Contact links for email, GitHub, LinkedIn, and Google Scholar
* `.nojekyll` marker file for GitHub Pages

To be added later:

* Korean CV PDF
* Profile photo
* RoK-3 project images
* RoK-4 project images
* ADAPT mechanism images
* RL walking simulation images or GIFs
* More video links or embedded demonstrations
* More detailed publication buttons such as Paper / Code / Project

Update notes:

```text
v1.3
- Added a Video button to the ADAPT homepage publication entry.

v1.2
- Added DOI buttons to selected homepage publications with confirmed DOI links.
- Added the IROS 2022 DOI to the HTML CV publication entry.

v1.1
- Added `.nojekyll` to match the documented GitHub Pages structure.
- Grouped homepage publications into Journal Papers and Conference Papers.
- Added CV availability labels for English PDF, HTML CV, and Korean CV coming soon.
- Reworked the Videos / Demos placeholder into individual demo cards.
```

---

## Repository Structure

```text
YunhoHan.github.io/
├── index.html
├── cv.html
├── assets/
│   ├── style.css
│   ├── script.js
│   └── cv.css
├── documents/
│   └── Yunho_Han_CV_EN_v1_0.pdf
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
* Publications
* Videos / Demos
* CV
* Contact

```text
cv.html
```

HTML version of the CV.

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
documents/Yunho_Han_CV_EN_v1_0.pdf
```

English CV PDF linked from the homepage.

---

## Website Sections

The homepage currently uses the following sections:

```text
Home
About
Research
Projects
Publications
Videos / Demos
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

Current project cards:

* RoK-4 Humanoid Robot
* ADAPT Differential Mechanism
* Mechanism-Aware RL Walking
* Model-Based Humanoid Walking
* RoK-3 Humanoid Robot
* Single-Leg Jumping Motion Planning

### Publications

Shows selected publications grouped into:

* Journal Papers
* Conference Papers

Also links to the full publication list on Google Scholar.

DOI buttons are shown for selected publications where DOI links are confirmed in the CV.

### Videos / Demos

Placeholder card section for future videos and demonstrations.

Planned demo categories:

* RoK-3 humanoid walking
* RoK-4 real-world walking
* RoK-4 full-mechanism MuJoCo simulation
* ADAPT differential mechanism demonstration
* Reinforcement learning-based humanoid walking
* Single-leg jumping motion generation

### CV

Links to:

* English CV PDF
* HTML CV

The section also shows availability labels for the English PDF, HTML CV, and the planned Korean CV.

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
* Selected Research Projects
* Publications
* Awards and Honors
* Technical Skills
* Selected Demonstrations
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
Korean CV PDF: not yet available
```

When a Korean CV is created later, add it to:

```text
documents/Yunho_Han_CV_KR_v1_0.pdf
```

Then update the CV section in `index.html`.

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

### 1. Add Images

Recommended image files:

```text
assets/profile.jpg
assets/rok3.jpg
assets/rok4.jpg
assets/adapt.jpg
assets/rl_walking.jpg
assets/jumping.jpg
```

Suggested use:

* Hero section: RoK-4 representative image
* Project cards: RoK-3, RoK-4, ADAPT, RL walking, jumping images
* Videos section: thumbnails or GIFs

### 2. Add Videos

Possible formats:

* YouTube links
* Embedded videos
* GIF thumbnails
* Local MP4 files, if file size is acceptable

Recommended demo items:

* RoK-3 humanoid walking
* RoK-4 real-world walking
* RoK-4 full-mechanism MuJoCo simulation
* ADAPT mechanism demonstration
* Mechanism-aware reinforcement learning walking
* Single-leg jumping motion

### 3. Add Additional Publication Action Buttons

The homepage publications section is already grouped by:

```text
Journal Papers
Conference Papers
```

Future improvements:

```text
[Paper] [Video] [Code] [Project]
```

A Domestic Papers subsection may be added later if those papers should appear directly on the homepage.

### 4. Add Korean CV

Add:

```text
documents/Yunho_Han_CV_KR_v1_0.pdf
```

Then create two CV buttons:

```text
English CV PDF
Korean CV PDF
```

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
