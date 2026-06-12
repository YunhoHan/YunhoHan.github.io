const translations = {
  en: {
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "Projects",
    nav_publications: "Publications",
    nav_demos: "Demos",
    nav_cv: "CV",
    nav_contact: "Contact",
    hero_eyebrow: "Humanoid Robotics Researcher",
    hero_subtitle: "Ph.D. Candidate, Department of Mechanical System Engineering, Kookmin University",
    hero_text: "My research focuses on humanoid robot design, legged locomotion, differential transmission mechanisms, model-based walking control, and reinforcement learning-based walking control for real-world bipedal robots.",
    btn_cv: "View CV",
    about_eyebrow: "About",
    about_title: "From RoK-3 to RoK-4 humanoid robotics",
    about_p1: "I have worked on humanoid robot platforms from RoK-3 to RoK-4, covering mechanical design, model-based walking control using WBC and MPC, dynamic motion planning, and mechanism-aware reinforcement learning.",
    about_p2: "My recent research focuses on RoK-4, a humanoid robot equipped with the ADAPT Hip Pitch–Knee differential mechanism, and reinforcement learning-based walking control validated through real-world experiments and full-mechanism simulation.",
    research_eyebrow: "Research",
    research_title: "Research Interests",
    ri_1: "Humanoid robot design",
    ri_2: "Legged locomotion",
    ri_3: "Differential transmission mechanisms",
    ri_4: "Whole-body control and MPC",
    ri_5: "Reinforcement learning-based walking",
    ri_6: "Mechanism-aware reinforcement learning",
    ri_7: "Sim-to-real and sim-to-sim validation",
    ri_8: "Kinodynamic motion planning",
    projects_eyebrow: "Projects",
    projects_title: "Selected Research Projects",
    project_rok4: "A humanoid robot platform for high-performance bipedal locomotion using a Hip Pitch–Knee differential leg mechanism.",
    project_adapt: "An Advanced Differential and Agile Parallel Transmission mechanism for humanoid robot legs, coupling actuator inputs with Hip Pitch and Knee outputs.",
    project_rl_title: "Mechanism-Aware RL Walking",
    project_rl: "A PPO-based walking controller using mechanism-aware observations, actions, and actuator–joint mapping.",
    project_model_title: "Model-Based Humanoid Walking",
    project_model: "Whole-body control, model predictive control, and torque-control-based walking for humanoid robots.",
    project_rok3: "Early humanoid walking experiments, foot mechanism design, variable stiffness sole, and slope walking research.",
    project_jump_title: "Single-Leg Jumping Motion Planning",
    project_jump: "Dynamic motion planning for agile legged motion using nonlinear trajectory optimization and kinodynamic planning.",
    pub_eyebrow: "Publications",
    pub_title: "Selected Publications",
    pub_more: "Full publication list on Google Scholar",
    demos_eyebrow: "Videos",
    demos_title: "Videos and Demonstrations",
    demo_1: "RoK-3 humanoid walking",
    demo_2: "RoK-4 real-world walking",
    demo_3: "RoK-4 full-mechanism MuJoCo simulation",
    demo_4: "ADAPT differential mechanism demonstration",
    demo_5: "Reinforcement learning-based humanoid walking",
    demo_6: "Single-leg jumping motion generation",
    demos_note: "Videos and images will be added later.",
    cv_title: "Curriculum Vitae",
    cv_text: "A PDF version of my CV is available below. A Korean CV will be added later.",
    cv_pdf: "English CV PDF",
    cv_html: "HTML CV",
    contact_eyebrow: "Contact",
    contact_title: "Get in touch"
  },
  ko: {
    nav_about: "소개",
    nav_research: "연구",
    nav_projects: "프로젝트",
    nav_publications: "논문",
    nav_demos: "데모",
    nav_cv: "CV",
    nav_contact: "연락처",
    hero_eyebrow: "휴머노이드 로봇 연구자",
    hero_subtitle: "국민대학교 기계시스템공학과 박사과정",
    hero_text: "저는 휴머노이드 로봇 설계, legged locomotion, 차동 전달 메커니즘, 모델 기반 보행 제어, 그리고 강화학습 기반 실제 이족 보행 제어를 연구하고 있습니다.",
    btn_cv: "CV 보기",
    about_eyebrow: "소개",
    about_title: "RoK-3에서 RoK-4로 이어지는 휴머노이드 로봇 연구",
    about_p1: "저는 RoK-3부터 RoK-4까지 휴머노이드 로봇 플랫폼을 다루며, 기구 설계, WBC/MPC 기반 모델 기반 보행 제어, 동적 모션 계획, 메커니즘 인식 강화학습을 연구해 왔습니다.",
    about_p2: "최근 연구는 ADAPT Hip Pitch–Knee 차동 메커니즘이 적용된 RoK-4 휴머노이드 로봇과, 실제 실험 및 full-mechanism 시뮬레이션으로 검증한 강화학습 기반 보행 제어에 초점을 둡니다.",
    research_eyebrow: "연구",
    research_title: "연구 관심 분야",
    ri_1: "휴머노이드 로봇 설계",
    ri_2: "Legged locomotion",
    ri_3: "차동 전달 메커니즘",
    ri_4: "전신 제어 및 MPC",
    ri_5: "강화학습 기반 보행 제어",
    ri_6: "메커니즘 인식 강화학습",
    ri_7: "Sim-to-real 및 sim-to-sim 검증",
    ri_8: "Kinodynamic motion planning",
    projects_eyebrow: "프로젝트",
    projects_title: "대표 연구 프로젝트",
    project_rok4: "Hip Pitch–Knee 차동 다리 메커니즘을 활용한 고성능 이족 보행 휴머노이드 로봇 플랫폼입니다.",
    project_adapt: "두 구동기 입력을 Hip Pitch와 Knee 출력으로 연결하는 휴머노이드 다리용 차동 전달 메커니즘입니다.",
    project_rl_title: "메커니즘 인식 RL 보행",
    project_rl: "메커니즘 인식 observation, action, actuator–joint mapping을 활용한 PPO 기반 보행 제어기입니다.",
    project_model_title: "모델 기반 휴머노이드 보행",
    project_model: "휴머노이드 로봇을 위한 WBC, MPC, 토크 제어 기반 보행 연구입니다.",
    project_rok3: "초기 휴머노이드 보행 실험, 발바닥 메커니즘, variable stiffness sole, 경사면 보행 연구입니다.",
    project_jump_title: "단일 다리 점프 모션 계획",
    project_jump: "비선형 궤적 최적화와 kinodynamic planning을 활용한 동적 legged motion 계획 연구입니다.",
    pub_eyebrow: "논문",
    pub_title: "주요 논문",
    pub_more: "Google Scholar에서 전체 논문 보기",
    demos_eyebrow: "영상",
    demos_title: "영상 및 데모",
    demo_1: "RoK-3 휴머노이드 보행",
    demo_2: "RoK-4 실제 로봇 보행",
    demo_3: "RoK-4 full-mechanism MuJoCo 시뮬레이션",
    demo_4: "ADAPT 차동 메커니즘 데모",
    demo_5: "강화학습 기반 휴머노이드 보행",
    demo_6: "단일 다리 점프 모션 생성",
    demos_note: "영상과 이미지는 추후 추가 예정입니다.",
    cv_title: "이력서",
    cv_text: "아래에서 영문 CV PDF를 확인할 수 있습니다. 국문 CV는 추후 추가 예정입니다.",
    cv_pdf: "영문 CV PDF",
    cv_html: "HTML CV",
    contact_eyebrow: "연락처",
    contact_title: "연락처"
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) el.textContent = dictionary[key];
  });
  document.documentElement.lang = lang === "ko" ? "ko" : "en";
  localStorage.setItem("language", lang);
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("language") || "en");
