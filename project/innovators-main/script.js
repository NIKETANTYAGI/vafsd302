document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const doctorName = document.getElementById('doctor-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    const confirmationMessage = Appointment booked with ${doctorName} on ${appointmentDate} at ${appointmentTime}.;
    document.getElementById('appointment-confirmation').innerText = confirmationMessage;
    document.getElementById('appointment-confirmation').classList.remove('hidden');

    // Optionally, reset the form
    document.getElementById('appointment-form').reset();
});

function startChat() {
    alert("Chat functionality will be implemented. You can chat with a doctor in real-time.");
}

function startVideoCall() {
    alert("Video call functionality will be implemented. You will be connected to a doctor soon.");
}