function submit() {
    let name = document.querySelector(".name-input").value;
    let email = document.querySelector(".email").value;
    let feedback = document.querySelector(".feedback").value;

    // Selecting the table body
    var tbody = document.querySelector("#tab tbody");

    // Creating new row
    var newrow = tbody.insertRow();  // Corrected method name to 'insertRow'
    
    // Creating new cells
    let namecell = newrow.insertCell(0);  // Corrected to 'insertCell'
    let emailcell = newrow.insertCell(1);
    let feedbackcell = newrow.insertCell(2);

    // Assigning value to cells
    namecell.innerHTML = name;
    emailcell.innerHTML = email;
    feedbackcell.innerHTML = feedback;

    // Creating a new action cell to hold the delete button
    let actionCell = newrow.insertCell(3);

    // Creating delete button
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "DELETE";  // Corrected to 'textContent'
    deletebtn.style.backgroundColor = "red";
    deletebtn.style.color = "white";

    // Attach the delete functionality
    deletebtn.onclick = function() {
        tbody.removeChild(newrow);  // Directly removing the row
    }

    // Append delete button to the action cell
    actionCell.appendChild(deletebtn);
}
