function sendEmail(form) {
    const name = document.getElementById("name").value;      // Retrieve the Name
    const email = document.getElementById("email").value;    // Retrieve the Email
    const message = document.getElementById("message").value; // Retrieve the Message

    // Build the mailto link
    const subject = encodeURIComponent("New Message");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:cyandug2@gmail.com?subject=${subject}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
}

