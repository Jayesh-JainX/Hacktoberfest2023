const chart = document.getElementById('interactive-chart');
const data = [
  { label: 'Achievement 1', value: 80 },
  { label: 'Achievement 2', value: 60 },
  { label: 'Achievement 3', value: 90 },
  // Add more data points
];

data.forEach((item, index) => {
  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.height = item.value + '%';
  bar.style.animation = `grow 1s ease ${index * 0.2}s`;
  bar.innerHTML = `<span class="label">${item.label}</span>`;
  chart.appendChild(bar);
});
