

document.querySelector('#reset').addEventListener('click', () => {
  localStorage.removeItem('color');
  location.reload();
});

const colorPicker = new iro.ColorPicker('#colorPicker', {
  color: localStorage.getItem('color') || '#151e15',
  borderWidth: 2,
  borderColor: '#fff',
  layout: [
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'hue'
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'saturation'
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'value'
      }
    },
  ]
});

colorPicker.on(['color:init', 'input:change'], (color) => {
  document.body.style.backgroundColor = color.hexString;
  document.querySelector('.hex').textContent = `HEX: ${color.hexString}`;
  document.querySelector('.rgb').textContent = `RGB: ${color.rgbString}`;
  document.querySelector('.hsl').textContent = `HSL: ${color.hslString}`;
  document.querySelector('.hsv').textContent = `HSV: ${color.hsv.h.toFixed(0) + ' ' + color.hsv.s.toFixed(0) + ' ' + color.hsv.v.toFixed(0)}`;
  document.querySelector('.temp').textContent = `KELVIN: ${color.kelvin.toFixed(0)}`;
  document.querySelectorAll('.themecolor').forEach((element) => {
    element.content = color.hexString;
  });
  if (color.hsl.l >= 45) {
    document.querySelector('.theme').textContent = 'THEME: light';
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  } else {
    document.querySelector('.theme').textContent = 'THEME: dark';
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }
  localStorage.setItem('color', color.hexString);
})
