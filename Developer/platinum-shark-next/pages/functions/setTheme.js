const setTheme = (theme) => {
  localStorage.setItem('psm-theme', JSON.stringify(theme));
};

export default setTheme;
