const regExEmail = /^[\w\.]+@northeastern\.edu$/;
const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
const regExZip = /^\d{5}$/;
const regExAlphanumeric = /^[a-zA-Z0-9\s]+$/;

const feedbackForm = document.getElementById("feedback-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const phoneNumber = document.getElementById("phoneNumber");
const streetAddress1 = document.getElementById("streetAddress1");
const streetAddress2 = document.getElementById("streetAddress2")
const zipCode = document.getElementById("zipCode");
const dropDown = document.getElementById("dropDown");
const dynamicCheckboxes = document.getElementById("dynamic-checkboxes");
const comments = document.getElementById("comments");
const submitButton = document.getElementById("submitButton");

let isZipCodeValid = false, isEmailIDValid = false, isPhoneNumberValid = false, isNameValid = false, isCommentsValid = false, isTitleValid = false, isSourceValid = false, isProductValid = false, isAddressValid = false;

document.querySelectorAll('input[name="title"]').forEach(function (element) {
    element.addEventListener("change", validateTitle);
});
document.querySelectorAll('input[name="source"]').forEach(function (element) {
    element.addEventListener("change", validateSource);
});

feedbackForm.addEventListener("submit", submitForm);
firstName.addEventListener("input", validateFormControls);
lastName.addEventListener("input", validateFormControls);
emailId.addEventListener("input", validateFormControls);
phoneNumber.addEventListener("input", validateFormControls);
streetAddress1.addEventListener("input", validateFormControls);
streetAddress2.addEventListener("input",validateFormControls);
zipCode.addEventListener("input", validateFormControls);
dropDown.addEventListener("change", handleSelectChange);
comments.addEventListener("input", validateFormControls);

function validateTitle() {
    const titleSelected = document.querySelector('input[name="title"]:checked');
    const errorField = document.getElementById('error-title');
    isTitleValid = !!titleSelected;
    errorField.style.display = isTitleValid ? "none" : "block";
    checkFormValidity();
}

function validateSource() {
    const sourceSelected = document.querySelectorAll('input[name="source"]:checked');
    const errorField = document.getElementById('error-source');
    isSourceValid = sourceSelected.length > 0;
    errorField.style.display = isSourceValid ? "none" : "block";
    checkFormValidity();
}

function validateStreetAddress1(value) {
    const errorField = document.getElementById('error-addressLine');

    if (value.trim().length >= 3 && value.trim().length <= 150 && regExAlphanumeric.test(value.trim())) {
        errorField.style.display = "none";
        isAddressValid = true;
    } else {
        errorField.style.display = "block";
        isAddressValid = false;
    }
    checkFormValidity();
}

function validateFormControls(event) {
    const value = event.target.value;
    const targetId = event.target.id;
    const errorFieldId = `error-${targetId}`;
    const errorField = document.getElementById(errorFieldId);

    if (targetId == "emailId") {
        isEmailIDValid = regExEmail.test(value.trim());
        errorField.style.display = isEmailIDValid ? "none" : "block";
    } else if (targetId == "phoneNumber") {
        isPhoneNumberValid = regExPhone.test(value.trim());
        errorField.style.display = isPhoneNumberValid ? "none" : "block";
    } else if (targetId == "zipCode") {
        isZipCodeValid = regExZip.test(value.trim());
        errorField.style.display = isZipCodeValid ? "none" : "block";
    } else if (targetId === "firstName" || targetId === "lastName") {
        isNameValid = value.trim().length >= 3 && value.trim().length <= 150 && regExAlphanumeric.test(value.trim());
        errorField.style.display = isNameValid ? "none" : "block";
    } else if (targetId === "comments") {
        isCommentsValid = value.trim().length >= 3 && value.trim().length <= 150;
        errorField.style.display = isCommentsValid ? "none" : "block";
    } else if (targetId === "streetAddress1") {
        validateStreetAddress1(value);
    } else if(targetId === "streetAddress2" && targetId ===""){
        return;
    }
    checkFormValidity();
}

function handleSelectChange() {
    dynamicCheckboxes.innerHTML = '';
    const selectedOption = dropDown.value;
    const errorField = document.getElementById('error-product');
    isProductValid = !!selectedOption;
    errorField.style.display = isProductValid ? "none" : "block";

    let checkboxLabel = '';

    switch (selectedOption) {
        case "Option 1":
            checkboxLabel = "Caffe Americano";
            break;
        case "Option 2":
            checkboxLabel = "Chocolate Cream Brew";
            break;
        case "Option 3":
            checkboxLabel = "Strawberry shake";
            break;
        case "Option 4":
            checkboxLabel = "Apple Oatmilk";
            break;
        case "Option 5":
            checkboxLabel = "Vanilla Protein shake";
            break;
        default:
            return;
    }

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.id = 'dynamic-checkbox';
    checkboxElement.style.float = 'left';
    checkboxElement.name = 'dynamic-checkbox';
    checkboxElement.value = checkboxLabel;

    const labelElement = document.createElement('label');
    labelElement.htmlFor = 'dynamic-checkbox';
    labelElement.textContent = checkboxLabel;

    dynamicCheckboxes.appendChild(checkboxElement);
    dynamicCheckboxes.appendChild(labelElement);

    checkboxElement.addEventListener('change', function () {
        handleCheckboxChange(checkboxElement);
    });
}

function handleCheckboxChange(checkboxElement) {
    const textFieldId = 'dynamic-text';
    const labelId = 'dynamic-text-label';
    if (checkboxElement.checked) {
        if (!document.getElementById(textFieldId) && !document.getElementById(labelId)) {
            const label = document.createElement('label');
            label.id = labelId;
            label.htmlFor = textFieldId;
            label.textContent = 'Please provide details: ';
            dynamicCheckboxes.appendChild(document.createElement('br'));
            dynamicCheckboxes.appendChild(label);

            const textField = document.createElement('input');
            textField.type = 'text';
            textField.id = textFieldId;
            textField.name = textFieldId;
            textField.placeholder = 'Enter details';
            textField.required = true;

            dynamicCheckboxes.appendChild(document.createElement('br'));
            dynamicCheckboxes.appendChild(textField);
        }
    } else {
        const textField = document.getElementById(textFieldId);
        const label = document.getElementById(labelId);
        if (textField) {
            textField.remove();
        }
        if (label) {
            label.remove();
        }
    }
}

function checkFormValidity() {
    if (isNameValid && isEmailIDValid && isPhoneNumberValid && isZipCodeValid && isCommentsValid && isTitleValid && isSourceValid && isAddressValid && isProductValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function submitForm(event) {
    event.preventDefault();
    validateTitle();
    validateSource();

    if (isNameValid && isEmailIDValid && isPhoneNumberValid && isZipCodeValid && isCommentsValid && isAddressValid && isProductValid) {
        displaySubmittedData();
        alert("Feedback saved successfully")
    } else {
        alert("Please enter valid details in all required fields.");
    }
}

function displaySubmittedData() {
    const title = document.querySelector('input[name="title"]:checked').value;
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const emailVal = emailId.value;
    const phoneVal = phoneNumber.value;
    const address1Val = streetAddress1.value;
    const address2Val = streetAddress2.value;
    const zipVal = zipCode.value;
    const productVal = dropDown.options[dropDown.selectedIndex].text;
    const sourceSelected = Array.from(document.querySelectorAll('input[name="source"]:checked')).map(checkbox => checkbox.value).join(", ");
    const commentsVal = comments.value;

    let tableHTML = `
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th>Zip Code</th>
                <th>Product</th>
                <th>How did you hear</th>
                <th>Comments</th>
            </tr>
            <tr>
                <td>${title}</td>
                <td>${firstNameVal}</td>
                <td>${lastNameVal}</td>
                <td>${emailVal}</td>
                <td>${phoneVal}</td>
                <td>${address1Val}</td>
                <td>${address2Val}</td>
                <td>${zipVal}</td>
                <td>${productVal}</td>
                <td>${sourceSelected}</td>
                <td>${commentsVal}</td>
            </tr>
        </table>
    `;
    const container = document.getElementById('container');
    container.innerHTML = container.innerHTML + tableHTML;
}

function resetForm() {
    submitButton.disabled = true;
}
