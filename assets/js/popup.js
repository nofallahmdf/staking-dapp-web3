document.addEventListener('DOMContentLoaded', function () {
  const popupOverlay = document.getElementById('popupOverlay');
  const closePopupButton = document.getElementById('closePopup');

  closePopupButton.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  });

  // Tampilkan popup ketika halaman dimuat
  popupOverlay.style.display = 'flex';
});
