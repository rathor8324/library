document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for membership forms
    document.getElementById('addMembershipForm').addEventListener('submit', addMembership);
    document.getElementById('updateMembershipForm').addEventListener('submit', updateMembership);
});

function addMembership(event) {
    event.preventDefault();

    // Get form values
    const membershipType = document.querySelector('input[name="membershipType"]:checked').value;
    const fullName = document.getElementById('fullName').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Validate form inputs
    if (!membershipType || !fullName || !contactNumber) {
        alert('All fields are mandatory');
        return;
    }

    // Perform further processing (e.g., send to server, update UI, etc.)
    console.log('Adding Membership:', { membershipType, fullName, contactNumber });
}

function updateMembership(event) {
    event.preventDefault();

    // Get form values
    const membershipNumber = document.getElementById('membershipNumber').value;
    // Validate form inputs
    if (!membershipNumber) {
        alert('Membership Number is mandatory');
        return;
    }

    // Perform further processing (e.g., send to server, update UI, etc.)
    console.log('Updating Membership:', { membershipNumber });
}
