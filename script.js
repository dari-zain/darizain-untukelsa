<script>
  const musik = document.getElementById('musik');
  const btn = document.getElementById('unmuteBtn');
  const nextBtn = document.getElementById('nextBtn');

  btn.addEventListener('click', () => {
    musik.muted = false;
    musik.play();
    btn.style.display = 'none';
    nextBtn.style.display = 'inline-block'; // tampilkan tombol lanjut
  });

  nextBtn.addEventListener('click', () => {
    window.location.href = "halaman2.html"; // pastikan nama file dan lokasinya benar
  });
</script>
