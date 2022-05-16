const color_scheme = 'user-color-scheme';
const color_mode = '--color-mode';

const modeToggleButton = document.querySelector('.mode-toggle');

const getColorMode = (property) => {
  let colorMode = getComputedStyle(document.documentElement).getPropertyValue(property);

  if (colorMode.length) {
    colorMode = colorMode.replace(/\'|"/g, '').trim();
  }
  return colorMode;
};

const applySetting = passedSetting => {
  let currentSetting = passedSetting || localStorage.getItem(color_scheme);
  
  if(currentSetting) {
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
  }
}

const toggleSetting = () => {
  let currentSetting = localStorage.getItem(color_scheme);
  
  switch(currentSetting) {
    case null:
      currentSetting = getColorMode(color_mode) === 'dark' ? 'light' : 'dark';
      break;
    case 'light':
      currentSetting = 'dark';
      break;
    case 'dark':
      currentSetting = 'light';
      break;
  }

  localStorage.setItem(color_scheme, currentSetting);
  
  return currentSetting;
}

modeToggleButton.addEventListener('click', evt => {
  evt.preventDefault();
  
  applySetting(toggleSetting());
});

applySetting();
