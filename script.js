// Theme switching
document.getElementById('themeSelect').addEventListener('change', (e) => {
  document.body.className = e.target.value;
  localStorage.setItem('theme', e.target.value);
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    document.getElementById('themeSelect').value = savedTheme;
  }

  const savedCurrency = localStorage.getItem('currency');
  if (savedCurrency) {
    document.getElementById('currencySelect').value = savedCurrency;
  }
});

// Save currency preference
document.getElementById('currencySelect').addEventListener('change', (e) => {
  localStorage.setItem('currency', e.target.value);
});

// Feedback button behavior
function openFeedback() {
  window.location.href = 'feedback.html';
}

