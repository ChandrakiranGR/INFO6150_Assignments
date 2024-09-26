function toggleDropDown(expand) {
    var currentRow = expand.closest('tr');
    console.log(currentRow)
    var dropDownRow = currentRow.nextElementSibling;
    console.log(dropDownRow)
    if (dropDownRow.style.display === "none" || dropDownRow.style.display === "") {
        dropDownRow.style.display = "table-row";
    } else {
        dropDownRow.style.display = "none";
    }
}
function addRecord() {
    var table = document.getElementById("myTable");
    console.log(table)
    var tbody = table.getElementsByTagName("tbody")[0];
    console.log(tbody)
    var rowCount = tbody.getElementsByTagName("tr").length;
    console.log(rowCount)
    var nextIndex = Math.floor(rowCount / 2) + 1;
    console.log(nextIndex)

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = `<input type="checkbox" onclick="selectRecord(this)" /><br /><br />
        <img src="down.png" width="25px" onclick="toggleDropDown(this)" />`;
    var td2 = document.createElement("td");
    td2.innerHTML = 'Student ' + nextIndex;
    var td3 = document.createElement("td");
    td3.innerHTML = 'Teacher ' + nextIndex;
    var td4 = document.createElement("td");
    td4.innerHTML = 'Approved';
    var td5 = document.createElement("td");
    td5.innerHTML = 'Fall';
    var td6 = document.createElement("td");
    td6.innerHTML = 'TA';
    var td7 = document.createElement("td");
    td7.innerHTML = Math.floor(10000 + Math.random() * 90000);
    var td8 = document.createElement("td");
    td8.innerHTML = '100%';
    var td9 = document.createElement("td");
    td9.className = 'dynamicEdit';
    td9.style.display = 'none';
    td9.innerHTML = '<button id="editBtn" style="display: none;" onclick="onEditRow(this)">Edit</button>';
    var td10 = document.createElement("td");
    td10.className = 'dynamicDel';
    td10.style.display = 'none';
    td10.innerHTML = '<button id="delBtn" style="display: none;" onclick="onDeleteRow(this)">Delete</button>';

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    tbody.appendChild(tr);

    var dropdownTr = document.createElement("tr");
    dropdownTr.className = "dropDownTextArea";
    dropdownTr.style.display = "none";
    var detailsTd = document.createElement("td");
    detailsTd.colSpan = "8";
    detailsTd.innerHTML = `
        Advisor:<br /><br />
        Award Details<br />
        Summer 1-2014(TA)<br />
        Budget Number: <br />
        Tuition Number: <br />
        Comments:<br /><br /><br />
        Award Status:<br /><br /><br />`;

    console.log(detailsTd.innerHTML)
    dropdownTr.appendChild(detailsTd);
    tbody.appendChild(dropdownTr);
    alert('Student ' + nextIndex + ' is added successfully');
}

function selectRecord(checkBox) {
    var selectedRow = checkBox.closest('tr');
    var editTd = selectedRow.cells[8];
    console.log(editTd)
    var editBtn = editTd.getElementsByTagName('button')[0];
    var delTd = selectedRow.cells[9];
    var delBtn = delTd.getElementsByTagName('button')[0];
    var checkboxes = document.getElementById('myTable').getElementsByTagName('input');
    var submitBtn = document.getElementById("submitBtn");

    if (checkBox.checked) {
        selectedRow.style.background = "yellow";
        editBtn.style.display = 'inline';
        delBtn.style.display = 'inline';
    } else {
        selectedRow.style.backgroundColor = "#fff";
        editBtn.style.display = 'none';
        delBtn.style.display = 'none';
    }
    var isAnyChecked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
            isAnyChecked = true;
            break;
        }
    }
    var editColumns = document.getElementsByClassName('dynamicEdit');
    var deleteColumns = document.getElementsByClassName('dynamicDel');

    for (var i = 0; i < editColumns.length; i++) {
        if (isAnyChecked) {
            editColumns[i].style.display = '';
            deleteColumns[i].style.display = '';
        } else {
            editColumns[i].style.display = 'none';
            deleteColumns[i].style.display = 'none';
        }
    }
    if (isAnyChecked) {
        submitBtn.style.backgroundColor = "orange";
        submitBtn.style.cursor = "pointer";
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
        submitBtn.style.cursor = "not-allowed";
        submitBtn.style.backgroundColor = "grey";
    }
}

function onEditRow(editRow) {
    var selectedRow = editRow.closest('tr');
    var studentName = selectedRow.cells[1].innerHTML;
    var popUp = document.createElement("div");
    popUp.id = "popUp";
    popUp.style.display = "none";
    popUp.innerHTML = `
      <h2><u>Edit details of ${studentName}</u></h2>
      <p>Student Name: ${selectedRow.cells[1].innerHTML}</p>
      <p>Teacher Name: ${selectedRow.cells[2].innerHTML}</p>
      <p>Status: ${selectedRow.cells[3].innerHTML}</p>
      <p>Semester: ${selectedRow.cells[4].innerHTML}</p>
      <p>Position: ${selectedRow.cells[5].innerHTML}</p>
      <p>ID: ${selectedRow.cells[6].innerHTML}</p>
      <p>Grade: ${selectedRow.cells[7].innerHTML}</p>
      <button onclick="updateRecord('${studentName}')">Update</button>
      <button onclick="onClosePopup()">Cancel</button>`;
    document.body.appendChild(popUp);
    popUp.style.display = "block";
    popUp.style.marginLeft = "25px"
    popUp.style.marginTop = "50px"
}

function updateRecord(studentName) {
    console.log(studentName)
    alert( studentName+ " details updated successfully.");
    onClosePopup();
}

function onClosePopup() {
    var popUp = document.getElementById("popUp");
    if (popUp) {
        document.body.removeChild(popUp);
    }
}

function onDeleteRow(deleteRow) {
    var selectedRow = deleteRow.closest('tr');
    console.log(selectedRow)
    var studentName = selectedRow.cells[1].innerHTML;
    var index = selectedRow.rowIndex;
    document.getElementById("myTable").deleteRow(index);
    document.getElementById("myTable").deleteRow(index);
    alert(studentName + " has been deleted successfully.");

    var checkboxes = document.getElementById('myTable').getElementsByTagName('input');
    var isAnyChecked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
            isAnyChecked = true;
            break;
        }
    }
    var submitBtn = document.getElementById("submitBtn");
    if (isAnyChecked) {
        submitBtn.style.backgroundColor = "orange";
        submitBtn.style.cursor = "pointer";
        submitBtn.disabled = false;
    } else {
        submitBtn.style.backgroundColor = "grey";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;
    }
}