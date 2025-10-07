function toggleDescription(id) {
  const box = document.getElementById(id);
  if (box) {
    box.classList.toggle("hidden");
  }
}