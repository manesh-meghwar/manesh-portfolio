const pages = [
  ["Home", "index.html"],
  ["My Resume", "resume.html"],
  ["Projects", "projects.html"],
  ["Blog", "blog.html"],
  ["Certificates", "certificates.html"],
  ["Contact", "contact.html"]
];

const current = location.pathname.split("/").pop() || "index.html";
const nav = document.getElementById("site-nav");
if (nav) {
  nav.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <span class="brand-mark">MK</span>
          <span class="brand-copy">MANESH <b>KUMAR</b><small>SOFTWARE × INTELLIGENCE</small></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul class="navbar-nav gap-lg-3">
            ${pages.map(([name, url]) => `<li class="nav-item"><a class="nav-link ${current === url ? "active" : ""}" href="${url}">${name}</a></li>`).join("")}
          </ul>
        </div>
      </div>
    </nav>`;
}

const footer = document.getElementById("site-footer");
if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="container d-flex justify-content-between"><span>© ${new Date().getFullYear()} Manesh Kumar</span><span>Built around curiosity, data & impact.</span></div></footer>`;
}

const projects = [
  ["BookWise – Book Recommendation System", "ML · RECOMMENDER SYSTEM", "BookWise is an end-to-end machine-learning recommendation system built with Python and Flask. It analyzes more than 1.14 million reader interactions from the Book-Crossing dataset and combines popularity-based ranking with item-based collaborative filtering and cosine similarity. The system delivers relevant book recommendations through a responsive light-and-dark interface using precomputed model artifacts for faster results.", "assets/projects/bookwise.png", "https://github.com/manesh-meghwar/book-recommendation-system"],
  ["Olympics Insight – Interactive Data Analytics Dashboard", " Olympics Insight Dashboard", "Olympics Insight is an interactive sports analytics dashboard built with Python, Pandas, Plotly, and Streamlit. It transforms 271,000+ athlete-event records into insights on medal trends, country performance, athlete demographics, participation growth, and historical Olympic patterns. The dashboard includes dynamic filters, responsive visualizations, and downloadable data for deeper exploration.", "assets/projects/olympics.png", "https://olympics-insight-dashboard.onrender.com/"],
  ["Bidme", "Laravel · REST APIs", "Contributed to the backend development of Birdme’s Android application by building and maintaining RESTful APIs with PHP and Laravel. The APIs supported mobile workflows for invoice creation, customer and product management, business reporting, payment-related operations, and data exchange between the application and backend services. This work focused on reliable API integration, structured data handling, validation, and secure communication to deliver a consistent mobile experience", "assets/projects/bidme.png", "https://play.google.com/store/apps/details?id=com.birdme"],
  ["The Darzee – On-Demand Tailoring Platform", "Laravel · REST APIs", "Contributed to The Darzee, an on-demand tailoring platform that enables women to design dresses digitally and receive finished garments at home. Developed backend functionality, REST APIs, database operations, and an administrative panel using PHP, Laravel, and MySQL.", "assets/projects/the-darzee.jpg", ""],
  ["MyCart Inventory System", "Laravel", "Developed a product inventory management system using PHP, Laravel, Magento, and MySQL to manage product records, stock levels, and inventory operations for managing products and operational data.", "assets/projects/mycart.jpg", ""],
  ["Objexyz Website", "WordPress", "Developed the OBJEXYZ WordPress website in 2021 to showcase its 3D printers, on-demand printing services, and related products. The project included responsive page development, product and service presentation, e-commerce functionality, and an accessible user experience across desktop and mobile devices.", "assets/projects/objexyz.png", "https://objexyz.com"],
  ["Preontech Website", "WordPress", "Developed the PREON Technologies corporate website in WordPress in 2021. The responsive website presents the company’s technology solutions—including online platforms, IoT, big data, and artificial intelligence—along with its products, team, partnership opportunities, careers, and contact information.", "assets/projects/preontech.png", "https://preontech.com/"],
  ["Property Management System", "Laravel", "A business application for organizing property-related records and workflows.", "assets/projects/property-management.jpg", ""],
  ["MyWater ATM System", "Laravel · REST API", "A connected management system combining a web backend with API-driven workflows.", "assets/projects/mywater-atm.jpg", ""],
  ["Vehicle Number Plate Recognition", "Java · OCR", "An academic computer-vision project using OCR to identify vehicle plates.", "assets/projects/number-plate-recognition.jpg", ""],
  ["Learning Management System", "Core PHP", "A learning platform developed at HIST using Core PHP.", "assets/projects/learning-management.jpg", ""]
];

const projectList = document.getElementById("project-list");
if (projectList) {
  projectList.innerHTML = projects.map((project, index) => {
    const id = `project-${index + 1}`;
    return `<div class="col-lg-6">
      <article class="project-card">
        <div class="project-top">
          <div class="project-visual">
            <img
              class="project-logo"
              src="${project[3]}"
              alt="${project[0]} project preview"
              width="110"
              height="110"
              loading="lazy"
            >
          </div>
          <div class="project-body project-image-body" style="--project-image:url('${project[3]}')">
            <p class="card-label">${project[1]}</p>
            <h2>${project[0]}</h2>
          </div>
        </div>
        <div class="accordion accordion-flush">
          <div class="accordion-item bg-transparent border-0">
            <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">View project description</button></h3>
            <div id="${id}" class="accordion-collapse collapse">
              <div class="accordion-body">
                <p class="mb-0">${project[2]}</p>
                <a
                  class="project-link ${project[4] ? "" : "is-empty"}"
                  href="${project[4] || "#"}"
                  target="_blank"
                  rel="noopener noreferrer"
                  ${project[4] ? "" : 'aria-disabled="true"'}
                >
                  View live project <i class="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>`;
  }).join("");
}

const certificateList = document.getElementById("certificate-list");
if (certificateList) {
  certificateList.innerHTML = Array.from({length: 12}, (_, index) => `
    <div class="col-md-6 col-lg-4"><article class="certificate-card">
      <span class="seal"><i class="bi bi-check-lg"></i></span>
      <small>CREDENTIAL ${String(index + 1).padStart(2, "0")}</small>
      <h2>Certificate title</h2><p>Issuer · Year</p><small>Description and verification link ready to add.</small>
    </article></div>`).join("");
}

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", event => event.preventDefault());
});

const introVideo = document.getElementById("intro-video");
const introVideoFrame = document.getElementById("intro-video-frame");
if (introVideo && introVideoFrame) {
  const showVideoPlaceholder = () => introVideoFrame.classList.add("video-missing");
  introVideo.addEventListener("error", showVideoPlaceholder);
  const source = introVideo.querySelector("source");
  if (source) source.addEventListener("error", showVideoPlaceholder);
}
