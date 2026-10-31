
$(document).ready(function () {

    // Mobile navigation
    $("#menuBtn").click(function () {
        $("#navLinks").slideToggle(250);
    });

    // Close menu after clicking a link
    $("#navLinks a").click(function () {
        $("#navLinks").slideUp(250);
    });

    // FAQ accordion
    $(".faq-question").click(function () {
        $(this).next(".faq-answer").slideToggle(250);
    });

    // Enquiry form demo
    $("#enquiryForm").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val().trim();

        if (name === "") {
            $("#formMessage").text("Please enter your name.");
            return;
        }

        $("#formMessage").text(
            "Thank you, " + name + "! Your enquiry has been received in this demo."
        );

        this.reset();
    });

});
