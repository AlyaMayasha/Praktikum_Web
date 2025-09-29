
const form = document.querySelector("form");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const tanggalInput = document.getElementById("tanggal");
const jamInput = document.getElementById("jam");
const studioSelect = document.getElementById("studio");
const modeToggler = document.getElementById("mode-toggle"); 

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  if (
    namaInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    tanggalInput.value === "" ||
    jamInput.value === "" ||
    studioSelect.value === ""
  ) {
    alert("Tolong isi semua field sebelum submit yaa!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    alert("Tolong masukkan email yang valid!");
    return;
  }

  const today = new Date();
  const selectedDate = new Date(tanggalInput.value);
  if (selectedDate < today.setHours(0, 0, 0, 0)) {
    alert("Tanggal reservasi tidak boleh sebelum hari ini, masukkan tanggal yang valid!");
    return;
  }

  alert(
    `Terima kasih, ${namaInput.value}! Reservasi untuk ${studioSelect.options[studioSelect.selectedIndex].text} pada ${tanggalInput.value} jam ${jamInput.value} telah dikirim!`
  );

  form.reset();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const jamInput = jam.value;

  if (jamInput < "08:00" || jamInput > "21:00") {
    alert("Jam reservasi hanya tersedia antara 08:00 sampai 21:00!");
    return;
  }

});

function applyTheme(theme) {
  const root = document.body;
  if (theme === "dark-mode") {
    root.classList.add("dark-mode");
    modeToggler.innerText = "🌞"; 
  } else {
    root.classList.remove("dark-mode");
    modeToggler.innerText = "🌙"; 
  }
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "light-mode");

modeToggler.addEventListener("click", () => {
  const root = document.body;
  
  const currentTheme = root.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
  
  const newTheme = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";
  
  applyTheme(newTheme);
  
  localStorage.setItem("theme", newTheme);
});
