document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === 'C') {
                currentInput = '';
                display.innerText = '0';
            } else if (value === '=') {
                try {
                    const result = eval(currentInput);
                    display.innerText = result;
                    alert('Calculation done!');
                } catch (error) {
                    display.innerText = 'Error';
                    alert('The following calculation cannot be done');
                }
            } else {
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.innerText = currentInput;
            }
        });
    });
});
