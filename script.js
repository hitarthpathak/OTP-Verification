let email_input = document.getElementById("email-input");
let otp_input = document.getElementById("otp-input");
let verification_result = document.getElementById("verification-result");

// ------------------------------------------------------------------------------------------------

let generated_otp;

// ------------------------------------------------------------------------------------------------

function send_otp() {
    if (email_input.value == "") {
        alert("Please Enter Your Email");
        return;
    }
    generated_otp = Math.floor(100000 + Math.random() * 900000);
    let subject = "OTP Verification";
    let body = `This Is Your OTP : ${generated_otp} \n\n Do Not Share It With Anyone!`;
    window.location.href = `mailto:${email_input.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// ------------------------------------------------------------------------------------------------

function verify_otp() {
    if (otp_input.value == "") {
        alert("Please Enter Your OTP");
        return;
    }
    if (Number(otp_input.value) == generated_otp) {
        verification_result.textContent = "OTP Verified Successfully!";
    }
    else {
        verification_result.textContent = "OTP Verification Failed!";
    }
};