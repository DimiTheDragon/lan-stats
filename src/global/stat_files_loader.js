const files = ['minecraft.js', 'factorio.js'];
files.forEach(f => {
  const s = document.createElement('script');
  s.src = `../../stat_files/${f}`;
  document.body.appendChild(s);
});
