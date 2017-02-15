app.component('menuBar', {
    // defines a two way binding in and out of the component
    bindings: {
        brand: '<'
    },
    // Load the template
    templateUrl: '/app/components/navbar/navbarlayout.html',
    controller: function () {
        // A list of menus
        this.menu = [{
            name: "Home",
            url: "/",
            icon: "fa-home"
        }, {
            name: "Register",
            url: "/register",
            icon: "fa-user-plus"
        }, {
            name: "Speakers",
            url: "/speakers",
            icon: "fa-users"
        }, {
            name: "Agenda",
            url: "/agenda",
            icon: "fa-clock-o"
        }, {
            name: "Attendees",
            url: "?attendees&dev=true",
            icon: "fa-users"
        }, {
            name: "Veune",
            url: "/venue",
            icon: "fa-map-pin"
        }, {
            name: "profile",
            url: "/profile",
            icon: "fa-user-circle"
        }];
        this.hideMenu = function () {
            $('body').find('.side-menu').removeClass('open');
            $('body').find('.side-menu').animate({
                left: "-200"
            }, 100);
        };
    }
});