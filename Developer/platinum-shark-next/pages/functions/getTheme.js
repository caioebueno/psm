const getTheme = () => {
  const theme = localStorage.getItem('psm-theme');
  return theme;
};

export default getTheme;
