app.service("registered", function () {
    this.message = "";
    this.welcomeBar = false;
    this.check = function (message) {
        if (localStorage.getItem("registered") == "true") {
            this.welcomeBar = true;
            this.message = message + localStorage.getItem("attendee_name");
        }
    }
});