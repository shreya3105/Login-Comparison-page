// function compareSystems() {
//   // redirect to report page
//   window.location.href = "report.html";
// }

// function addMoreFields() {
//   const fieldsTable = document.getElementById("fields-table");
//   const newFieldNumber = fieldsTable.rows.length + 1;

//   const newRow = document.createElement("tr");
//   newRow.innerHTML = `
//           <td class="label">Field ${newFieldNumber}</td>
//           <td><input type="text" data-field="field${newFieldNumber}" data-system="1" /></td>
//           <td><input type="text" data-field="field${newFieldNumber}" data-system="2" /></td>
//         `;

//   fieldsTable.appendChild(newRow);
// }
// function addMoreFields() {
//   const tableBody = document.querySelector("table tbody");
//   const rowCount = tableBody.rows.length + 1; // to calculate new field number
//   const newRow = document.createElement("tr");
//   const fieldLabel = `Field ${rowCount}`;

//   newRow.innerHTML = `
//     <td>${fieldLabel}</td>
//     <td><input type="text" /></td>
//     <td><input type="text" /></td>
//   `;

//   tableBody.appendChild(newRow);
// }
