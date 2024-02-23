"use strict";
const apiUrl = "http://localhost:3000/employees";
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
const userData = {
    id: 6,
    firstName: "Phuc",
    lastName: "Lê",
    address: "28 Nguyễn Tri Phương, Phú Nhuận, TP Huế",
};
// Thực hiện yêu cầu POST
fetch(apiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
})
    .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
    .catch((error) => {
    console.error("Error:", error.message);
});
const apiUrlPut = "http://localhost:3000/employees/3";
const userDataPut = {
    id: 3,
    firstName: "Đức",
    lastName: "Phạm",
    address: "Ba Đình",
};
// Thực hiện yêu cầu PUT
fetch(apiUrlPut, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userDataPut),
})
    .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
    .catch((error) => {
    console.error("Error:", error.message);
});
