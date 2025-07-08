const nodemailer = require("nodemailer");
// Setup transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmailforContactus = async (formData) => {
    let mailOptions = {
        from: "abhishekkaushal2526@gmail.com",
        to: "surajkaushal823@gmail.com",
        subject: "New Message Submission for President or Mrs. Obama",
        text: `Dear Obama Support Team,

A new message has been submitted through the "Contact the Obamas" form. Below are the details:

Recipient: ${formData.recipient}
Prefix: ${formData.prefix}
First Name: ${formData.firstName}
Middle Name: ${formData.middleName}
Last Name: ${formData.lastName}
Suffix: ${formData.suffix}

Email: ${formData.email}
Phone: ${formData.phone}

Address:
Street: ${formData.street}
City: ${formData.city}
State: ${formData.state}
Country: ${formData.country}
Postal Code: ${formData.postalCode}

Message:
${formData.message}

Please review this message and take appropriate action.

Kind regards,  
Website Contact Form System`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error sending email:", error);
        }
        console.log("Email sent successfully:");
    });
};

const sendEmailForSchedule = async (formData) => {
    const mailOptions = {
        from: "abhishekkaushal2526@gmail.com",
        to: "surajkaushal823@gmail.com",
        subject: `New Schedule Request: ${formData.eventTitle}`,
        text: `Dear Admin,

A new schedule request has been submitted. Here are the details:

📌 Invitation For: ${formData.invitationFor}
🏢 Host Organization: ${formData.hostOrganization}
🔗 Website: ${formData.hostWebsite}

🏛️ Organization Description:
${formData.organizationDescription}

👤 Contact Name: ${formData.contactName}
✉️ Contact Email: ${formData.contactEmail}
📞 Contact Phone: ${formData.contactPhone}

📅 Event Title: ${formData.eventTitle}
🗓️ Event Date: ${formData.eventDate}
📰 Media Presence: ${formData.mediaPresence}

📍 Event Location: ${formData.eventLocation}
🛣️ Street: ${formData.street}
🏙️ City: ${formData.city}
🏞️ State: ${formData.state}
🌍 Country: ${formData.country}
📬 Postal Code: ${formData.postalCode}

🎯 Audience Description:
${formData.audienceDescription}

📝 Event Description:
${formData.eventDescription}

Please review this request and take appropriate action.

Kind regards,  
Schedule Submission System`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error("Error sending email:", error);
        }
        console.log("Email sent successfully:");
    });
};


module.exports = {sendEmailforContactus,sendEmailForSchedule};