let users = [];

function display() {
    let displayer = document.getElementById('displayer');
    displayer.innerHTML = '';

    users.forEach((elem, index) => {
        displayer.innerHTML += `
            <tr class="border-3 bottom py-2">
                <td class="b ps-2">${elem.name} <button onclick="editUser(${index}, 'name')" class="bg-danger border-3 rounded-2 text-white">edit</button></td>
                <td class="b ps-2">${elem.course}<button onclick="editUser(${index}, 'course')" class="bg-danger border-3 rounded-2 text-white">edit</button></td>
                <td class="b ps-2">${elem.gender}<button onclick="editUser(${index}, 'gender')" class="bg-danger border-3 rounded-2 text-white">edit</button></td>
                <td class="b ps-2">${elem.email}<button onclick="editUser(${index}, 'email')" class="bg-danger border-3 rounded-2 text-white">edit</button></td>
            </tr>
        `;
    });
}

function execute() {
    let nameInput = document.getElementById('Name');
    let courseInput = document.getElementById('course');
    let genderInput = document.getElementById('gender');
    let emailInput = document.getElementById('email');


let userdata = {
    name: nameInput.value,
    course: courseInput.value,
    gender: genderInput.value,
    email: emailInput.value
};

users.push(userdata);
display();

// Clear input fields after adding user
nameInput.value = '';
courseInput.value = '';
genderInput.value = '';
emailInput.value = '';
}

function editUser(index, property) {
let newValue = prompt(`Enter new ${property}`);
if (newValue !== null && newValue !== "") {
    users[index][property] = newValue;
    display();
}
}