$(document).ready(() => {
    $('#Display').text(sessionStorage.getItem("username"));

    const validateNumber = (value, errorElement) => {
        value = String(value).trim();

        if (value === "") {
            $(errorElement).text("This field cannot be empty");
            return false;
        }
        if (!/^-?\d+(\.\d+)?$/.test(value)) {
            $(errorElement).text("Only valid numbers are allowed (No special characters or alphabets)");
            return false;
        }
        $(errorElement).text("");
        return true;
    };

    const calculate = (num1, num2, operation) => {
        switch (operation) {
            case 'add': return num1 + num2;
            case 'subtract': return num1 - num2;
            case 'multiply': return num1 * num2;
            case 'divide': return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
            default: return null;
        }
    };

    const handleOperation = (operation) => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();

        if (validateNumber(num1, '#num1Error') && validateNumber(num2, '#num2Error')) {
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);

            const result = calculate(n1, n2, operation);
            $('#result').val(result);
        } else {
            $('#result').val("");
        }
    };

    $('#add').click(() => handleOperation('add'));
    $('#subtract').click(() => handleOperation('subtract'));
    $('#multiply').click(() => handleOperation('multiply'));
    $('#divide').click(() => handleOperation('divide'));
});
