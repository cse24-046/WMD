// Theme Toggle
const themeSelect = document.getElementById('themeSelect');
themeSelect?.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', themeSelect.value === 'dark');
  localStorage.setItem('evodia-theme', themeSelect.value);
});

// Currency Conversion (placeholder)
const currencyRates = {
  BWP: 1,
  USD: 0.073,
  EUR: 0.068,
  ZAR: 1.35
};

const currencySelect = document.getElementById('currencySelect');
currencySelect?.addEventListener('change', () => {
  localStorage.setItem('evodia-currency', currencySelect.value);
});

// Load saved preferences
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('evodia-theme') || 'light';
  themeSelect && (themeSelect.value = savedTheme);
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');

  const savedCurrency = localStorage.getItem('evodia-currency') || 'BWP';
  currencySelect && (currencySelect.value = savedCurrency);

  // Trial start logic
  if (!localStorage.getItem('trialStart')) {
    localStorage.setItem('trialStart', new Date().toISOString());
  }
});

// Modal Logic
function showPerfumeNotes(name) {
  const modal = document.getElementById("perfumeModal");
  const baseNote = document.getElementById("baseNoteValue");
  const perfumeName = document.getElementById("perfumeName");

  perfumeName.innerText = name;
  modal.style.display = "flex";

  const trialStart = localStorage.getItem('trialStart');
  const today = new Date();
  const start = new Date(trialStart);
  const days = (today - start) / (1000 * 60 * 60 * 24);

  if (days <= 14) {
    baseNote.innerText = 'Amber, Vanilla, Musk';
  } else {
    baseNote.innerText = 'Subscribe (BWP150/month) to view base notes.';
  }
}

document.getElementById("closeModal")?.addEventListener("click", () => {
  document.getElementById("perfumeModal").style.display = "none";
});

// Search Logic
document.getElementById("searchInput")?.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const perfumes = document.querySelectorAll(".perfume-card");

  perfumes.forEach(card => {
    const name = card.textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});

