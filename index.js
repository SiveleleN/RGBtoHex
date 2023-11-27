function convertToHex() {
    
    let rgbInput = document.getElementById('rgbInput').value;

    
    let rgbValues = rgbInput.split(',');

    
    let hexValues = rgbValues.map(value => {
        
        let hex = parseInt(value.trim()).toString(16);

        
        return hex.length === 1 ? '0' + hex : hex;
    });

    
    let hexCode = '#' + hexValues.join(''); document.getElementById('hexOutput').textContent = 'Hex: ' + hexCode;
}