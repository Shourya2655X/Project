const platformData = {
  recommended_projects: [
    {
      title: "AI-powered content writer",
      client: "Zero Scam Omnet",
      location: "Remote",
      skill_level: "Basic",
      verified: true,
      description: "Create engaging content using AI tools and human creativity",
      tags: ["Content", "AI", "Writing"],
      budget: "₹15,000 - ₹25,000",
      duration: "2-3 weeks",
      skill_category: "Content Writer",
    },
    {
      title: "Advanced Video Editor",
      client: "Zero-Scamm Omnet",
      location: "Delhi, India",
      skill_level: "Pro",
      verified: true,
      description: "Professional video editing for social media and marketing campaigns",
      tags: ["Video", "Editing", "Social Media"],
      budget: "₹30,000 - ₹50,000",
      duration: "1-2 months",
      skill_category: "Video Editor",
    },
    {
      title: "DotaVoid Video Hoster",
      client: "Insanity Guarantee",
      location: "Mumbai, India",
      skill_level: "Advanced",
      verified: true,
      description: "Advanced video hosting solutions and streaming platform development",
      tags: ["Video", "Hosting", "Technical"],
      budget: "₹80,000 - ₹120,000",
      duration: "3-4 months",
      skill_category: "Video Editor",
    },
  ],
  hot_projects: [
    {
      company: "Nexus Media",
      title: "Lead UI-UX Designer",
      skill_level: "Pro",
      location: "Delhi, India",
      verified: true,
      description: "Design user experiences for mobile apps and web platforms",
      budget: "₹45,000 - ₹70,000",
      applicants: 12,
      skill_category: "UI/UX Designer",
    },
    {
      company: "Global Reach Corp",
      title: "Social Media Video Editor",
      skill_level: "Basic",
      location: "Delhi, India",
      verified: true,
      description: "Edit content for social media platforms and digital marketing",
      budget: "₹20,000 - ₹35,000",
      applicants: 8,
      skill_category: "Video Editor",
    },
    {
      company: "Tech Innovations",
      title: "Frontend Developer",
      skill_level: "Pro",
      location: "Bangalore, India",
      verified: true,
      description: "Build responsive web applications using modern frameworks",
      budget: "₹60,000 - ₹90,000",
      applicants: 15,
      skill_category: "Web Developer",
    },
    {
      company: "Creative Studio",
      title: "Graphic Designer",
      skill_level: "Basic",
      location: "Mumbai, India",
      verified: true,
      description: "Create visual content for branding and marketing materials",
      budget: "₹18,000 - ₹30,000",
      applicants: 6,
      skill_category: "Content Writer",
    },
  ],
  courses: [
    {
      id: 1,
      title: "AI Fundamentals & Gen AI Tools",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      price: "₹4,999",
      originalPrice: "₹7,999",
      level: "Beginner to Intermediate",
      description: "Master ChatGPT, Midjourney, Claude AI and more",
      modules: 24,
      students: 1250,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Advanced Video Editing",
      instructor: "Mike Rodriguez",
      duration: "6 weeks",
      price: "₹3,499",
      originalPrice: "₹5,999",
      level: "Intermediate",
      description: "Professional video editing with Adobe Premiere Pro and After Effects",
      modules: 18,
      students: 890,
      rating: 4.7,
    },
    {
      id: 3,
      title: "Full Stack Development (MERN)",
      instructor: "Priya Sharma",
      duration: "12 weeks",
      price: "₹8,999",
      originalPrice: "₹12,999",
      level: "Beginner to Advanced",
      description: "Complete web development with MongoDB, Express, React, Node.js",
      modules: 36,
      students: 2100,
      rating: 4.9,
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      instructor: "Alex Chen",
      duration: "10 weeks",
      price: "₹6,499",
      originalPrice: "₹9,999",
      level: "Intermediate",
      description: "Design thinking, Figma, prototyping and user research",
      modules: 28,
      students: 1650,
      rating: 4.8,
    },
  ],
  internships: [
    {
      id: 1,
      company: "StartupX Technologies",
      title: "UI/UX Design Intern",
      duration: "2 months",
      type: "unpaid",
      stipend: null,
      requirements: ["Figma", "Basic design principles", "Portfolio"],
      description: "Work on real product designs with mentorship from senior designers",
      location: "Remote",
      applications: 45,
      deadline: "2025-10-15",
    },
    {
      id: 2,
      company: "Digital Marketing Hub",
      title: "Content Creation Intern",
      duration: "1-2 months",
      type: "paid",
      stipend: "₹5,000/month",
      requirements: ["Writing skills", "Social media knowledge", "Canva/Photoshop"],
      description: "Create content for client campaigns and social media management",
      location: "Delhi, India",
      applications: 32,
      deadline: "2025-09-30",
    },
    {
      id: 3,
      company: "Tech Solutions Inc",
      title: "Web Development Intern",
      duration: "3 months",
      type: "paid",
      stipend: "₹8,000/month",
      requirements: ["HTML/CSS", "JavaScript", "React basics"],
      description: "Build web applications and learn from experienced developers",
      location: "Bangalore, India",
      applications: 67,
      deadline: "2025-10-01",
    },
  ],
};

const loginPage = document.getElementById("loginPage");
const mainApp = document.getElementById("mainApp");
const welcomeMsg = document.getElementById("welcomeMsg");
const navButtons = document.querySelectorAll(".side-nav .nav-btn");
const pages = document.querySelectorAll(".page");
const recommendedProjectsContainer = document.getElementById("recommendedProjects");
const hotProjectsContainer = document.getElementById("hotProjects");
const coursesList = document.getElementById("coursesList");
const internshipsList = document.getElementById("internshipsList");
const aiSkillTab = document.getElementById("aiSkillTab");
const aiLevelTabs = document.getElementById("aiLevelTabs");
const aiSearchResults = document.getElementById("aiSearchResults");
const internshipFilterTabs = document.getElementById("internshipFilterTabs");

let loggedInUserName = "";
let currentPage = "dashboard";
let aiSelectedSkill = "Video Editor";
let aiSelectedLevel = "Basic";
let internshipFilterType = "all";

function init() {
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showPage(btn.getAttribute("data-target"));
    });
  });

  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("loginName").value.trim();
    if (name) {
      loggedInUserName = name;
      welcomeMsg.textContent = `Welcome back, ${loggedInUserName}`;
      loginPage.style.display = "none";
      mainApp.style.display = "flex";
      showPage("dashboard");
      renderDashboard();
      renderCourses();
      renderInternships();
      renderAISearch();
    }
  });

  document.getElementById("dashboardSkillFilter").addEventListener("change", e => renderDashboard(e.target.value));

  aiSkillTab.addEventListener("change", e => {
    aiSelectedSkill = e.target.value;
    aiSelectedLevel = "Basic";
    [...aiLevelTabs.children].forEach(t => t.classList.remove("active"));
    aiLevelTabs.children[0].classList.add("active");
    renderAISearch();
  });

  [...aiLevelTabs.children].forEach(tab => {
    tab.addEventListener("click", () => {
      [...aiLevelTabs.children].forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      aiSelectedLevel = tab.getAttribute("data-level");
      renderAISearch();
    });
  });

  [...internshipFilterTabs.children].forEach(tab => {
    tab.addEventListener("click", () => {
      [...internshipFilterTabs.children].forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      internshipFilterType = tab.getAttribute("data-type");
      renderInternships();
    });
  });
}

function showPage(pageId) {
  currentPage = pageId;
  pages.forEach(p => p.id === pageId ? p.classList.add("active") : p.classList.remove("active"));
}

function renderDashboard(skillFilter = "all") {
  recommendedProjectsContainer.innerHTML = "";
  hotProjectsContainer.innerHTML = "";

  const recommendedProjects = platformData.recommended_projects.filter(p => skillFilter === "all" ? true : p.skill_category === skillFilter);
  const hotProjects = platformData.hot_projects.filter(p => skillFilter === "all" ? true : p.skill_category === skillFilter);

  recommendedProjects.forEach(project => recommendedProjectsContainer.appendChild(createProjectCard(project)));
  hotProjects.forEach(project => hotProjectsContainer.appendChild(createProjectCard(project)));
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = project.title;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = project.description;
  card.appendChild(desc);

  const meta = document.createElement("div");
  meta.innerHTML = `
    <span class="badge">${project.skill_level}</span>
    ${project.verified ? `<span class="badge verified">Verified</span>` : ""}
    <p>${project.client || project.company} - ${project.location}</p>
    <p>Budget: ${project.budget}</p>
    <p>Duration: ${project.duration || ''}</p>
  `;
  card.appendChild(meta);
  return card;
}

function renderCourses() {
  coursesList.innerHTML = "";
  platformData.courses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Instructor: </strong>${course.instructor}</p>
      <p><strong>Duration: </strong>${course.duration}</p>
      <p><strong>Price: </strong>${course.price} <del>${course.originalPrice}</del></p>
      <p><strong>Level: </strong>${course.level}</p>
    `;

    coursesList.appendChild(card);
  });
}

function renderInternships() {
  internshipsList.innerHTML = "";
  let filtered = platformData.internships;
  if (internshipFilterType !== "all") {
    filtered = filtered.filter(intern => intern.type === internshipFilterType);
  }
  filtered.forEach(internship => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${internship.title}</h3>
      <p>${internship.description}</p>
      <p><strong>Company: </strong>${internship.company}</p>
      <p><strong>Duration: </strong>${internship.duration}</p>
      <p><strong>Stipend: </strong>${internship.stipend ? internship.stipend : "Unpaid"}</p>
      <p><strong>Location: </strong>${internship.location}</p>
      <p><strong>Applications: </strong>${internship.applications}</p>
      <p><strong>Deadline: </strong>${internship.deadline}</p>
    `;

    internshipsList.appendChild(card);
  });
}

function renderAISearch() {
  aiSearchResults.innerHTML = "";
  const filtered = platformData.recommended_projects.filter(proj => proj.skill_category === aiSelectedSkill && proj.skill_level === aiSelectedLevel);
  filtered.forEach(project => {
    aiSearchResults.appendChild(createProjectCard(project));
  });

  if (filtered.length === 0) {
    aiSearchResults.innerHTML = "<p>No projects found for these filters.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});


