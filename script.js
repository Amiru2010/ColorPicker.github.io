const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const copyBtn = document.getElementById('copyBtn');

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

colorPicker.addEventListener('input', (e) => {
  const selectedColor = e.target.value;
  const rgb = hexToRgb(selectedColor);
  colorBox.style.backgroundColor = selectedColor;
  colorCode.textContent = `${selectedColor} | ${rgb}`;
});

copyBtn.addEventListener('click', () => {
  const text = colorCode.textContent.split('|')[0].trim(); // copy hex only
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy Color Code", 1500);
  });
});
