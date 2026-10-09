document.addEventListener('DOMContentLoaded', () => {
  // Chart defaults for dark theme
  Chart.defaults.color = '#94A3B8';
  Chart.defaults.font.family = "'Inter', sans-serif";

  // 1. Hero Background Chart (Decorative Trend Line)
  const heroCtx = document.getElementById('heroChart').getContext('2d');
  
  const heroGradient = heroCtx.createLinearGradient(0, 0, 0, 300);
  heroGradient.addColorStop(0, 'rgba(53, 208, 201, 0.4)');
  heroGradient.addColorStop(1, 'rgba(53, 208, 201, 0)');

  new Chart(heroCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
        label: 'Accuracy Optimization',
        data: [65, 68, 72, 71, 78, 85, 84, 89, 93, 97],
        borderColor: '#35D0C9',
        backgroundColor: heroGradient,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#121822',
        pointBorderColor: '#35D0C9',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1A222E',
          titleColor: '#fff',
          bodyColor: '#94A3B8',
          borderColor: '#232C38',
          borderWidth: 1,
          padding: 10
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(35, 44, 56, 0.5)' },
          ticks: { display: false }
        },
        y: {
          grid: { color: 'rgba(35, 44, 56, 0.5)' },
          ticks: { display: false }
        }
      }
    }
  });

  // 2. Skills Radar Chart
  const radarCtx = document.getElementById('skillsRadarChart').getContext('2d');
  new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'SPSS/R', 'EDA'],
      datasets: [{
        label: 'Proficiency Level',
        data: [95, 90, 85, 80, 85, 95],
        backgroundColor: 'rgba(245, 166, 35, 0.2)',
        borderColor: '#F5A623',
        pointBackgroundColor: '#F5A623',
        pointBorderColor: '#121822',
        pointHoverBackgroundColor: '#121822',
        pointHoverBorderColor: '#F5A623'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(35, 44, 56, 0.8)' },
          grid: { color: 'rgba(35, 44, 56, 0.8)' },
          pointLabels: {
            color: '#E2E8F0',
            font: { family: "'IBM Plex Mono', monospace", size: 12 }
          },
          ticks: {
            display: false,
            max: 100,
            min: 0
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });

  // 3. Domains Doughnut Chart
  const doughnutCtx = document.getElementById('domainDoughnutChart').getContext('2d');
  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Data Prep & Cleaning', 'Predictive Modeling', 'Data Visualization', 'Statistical Analysis'],
      datasets: [{
        data: [35, 30, 20, 15],
        backgroundColor: [
          '#35D0C9', // Teal
          '#F5A623', // Orange
          '#4A90E2', // Blue
          '#E83E8C'  // Pink
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '75%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#E2E8F0',
            font: { family: "'Inter', sans-serif" },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        }
      }
    }
  });
});
