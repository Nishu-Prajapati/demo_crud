
document.getElementById('dataForm').addEventListener('submit', function(event){
event.preventDefault();

const name = document.getElementById('nameEmp').value;
const ID = document.getElementById('idEmp').value;

if(name && ID){
const tableBody = document.querySelector('#recordsTable tbody');
const newRow = document.createElement('tr');

const nameCell = document.createElement('td');
nameCell.textContent = name;
newRow.appendChild(nameCell);

const IDCell = document.createElement('td');
IDCell.textContent = ID;
newRow.appendChild(IDCell);
tableBody.appendChild(newRow);

document.getElementById('dataForm').reset();



const OptionsCell = document.createElement('td');

const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.className = 'edit-button';
editButton.addEventListener('click', function() {
  const newName = prompt('enter new nam:', name);
  const newID = prompt('enter newID: ',ID);
  if(newName!==null&& newID!==null){
  nameCell.textContent = newName;
  IDCell.textContent = IDCell;
  }
});

OptionsCell.appendChild(editButton);
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'delete-button';
deleteButton.addEventListener('click', function() {
if (confirm(`Do you want to delete ${name}?`)) {
newRow.remove();
}
});


OptionsCell.appendChild(deleteButton);
newRow.appendChild(OptionsCell);
tableBody.appendChild(newRow);
document.getElementById('dataForm').reset();

}
});

