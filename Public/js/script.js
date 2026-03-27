// ── Sidebar active state ──────────────────────────────────────────────────────
function setActive(el) {
  document.querySelectorAll('.sidebar ul.menu li').forEach(li => li.classList.remove('active'));
  el.classList.add('active');
  localStorage.setItem('activeSection', el.dataset.section);
}

// Restaura aba ativa com base no URL atual
(function () {
  const sectionMap = {
    '/developer': 'overview',
    '/developer/tech-trends': 'tech-trends',
    '/developer/career-paths': 'career-paths',
    '/developer/ai-tools': 'ai-tools',
    '/developer/learning': 'learning',
    '/developer/salary-explorer': 'salary-explorer',
    '/developer/demographics': 'demographics',
  };
  const activeSection = sectionMap[window.location.pathname]
    || localStorage.getItem('activeSection')
    || 'overview';
  document.querySelectorAll('.sidebar ul.menu li').forEach(li => {
    li.classList.toggle('active', li.dataset.section === activeSection);
  });
})();

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("themeIcon");

    body.classList.toggle("light-mode");

    // Cambiar icono
    if (body.classList.contains("light-mode")) {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    } else {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    }

// Persite tema seleccionado en localStorage 
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');

}

// ── Restaura tema ao carregar página ─────────────────────────────────────────
(function () {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
  }
})();

// MODAL DEL GRÁFICO
const showChartBtn = document.getElementById('showChartBtn');
const chartModal = document.getElementById('chartModal');
const closeChart = document.getElementById('closeChart');

showChartBtn.addEventListener('click', () => {
    chartModal.style.display = 'block';
});

closeChart.addEventListener('click', () => {
    chartModal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if(e.target === chartModal){
        chartModal.style.display = 'none';
    }
});