document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControl = document.getElementById('fontSizeControl');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const colorModeCheckbox = document.getElementById('colorMode');

    // Recupera configurações do LocalStorage (se existirem)
    const savedFontSize = localStorage.getItem('fontSize');
    const isColorModeEnabled = localStorage.getItem('colorMode') === 'true';

    if (savedFontSize) {
        fontSizeControl.value = savedFontSize;
        fontSizeValue.textContent = `${savedFontSize}px`;
        document.documentElement.style.fontSize = `${savedFontSize}px`;
    }

    if (isColorModeEnabled) {
        colorModeCheckbox.checked = true;
        document.documentElement.classList.add('daltonico');
    }

    // Exibe o tamanho da fonte selecionado e ajusta a página
    fontSizeControl.addEventListener('input', function () {
        const size = fontSizeControl.value;
        fontSizeValue.textContent = `${size}px`;
        document.documentElement.style.fontSize = `${size}px`;
    });

    // Salva as configurações ao clicar no botão
    document.getElementById('saveSettings').addEventListener('click', function () {
        const selectedFontSize = fontSizeControl.value;
        const isColorModeEnabled = colorModeCheckbox.checked;

        // Salva as configurações no LocalStorage
        localStorage.setItem('fontSize', selectedFontSize);
        localStorage.setItem('colorMode', isColorModeEnabled);

        // Aplica o modo para daltônicos
        if (isColorModeEnabled) {
            document.documentElement.classList.add('daltonico');
        } else {
            document.documentElement.classList.remove('daltonico');
        }

        alert('Configurações salvas com sucesso!');
    });
});
