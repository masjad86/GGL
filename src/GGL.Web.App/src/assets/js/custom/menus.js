var menuItems = [
    { name: "Home", url: "index.html", children: [] },
    {
        name: "Gallery", url: "gallery.html", children: [
            { name: "Photos", url: "gallery.html", children: [] },
            { name: "Videos", url: "video_gallery.html", children: [] }
        ]
    },
    {
        name: "Serivices", url: "services.html",
        children: [
            { name: "Lighting", url: "lighting.html", children: [] },
            { name: "Catering", url: "catering.html", children: [] },
            { name: "Decoration", url: "decoration.html", children: [] }
        ]
    },
    { name: "Specials", url: "specials.html", children: [] },
    {
        name: "Bookings", url: "booking.html", children: [
            { name: "Booking Calender", url: "booking.html#calender", children: [] },
            { name: "Find Booking Date", url: "booking.html#booking", children: [] }
        ]
    },
    { name: "About Us", url: "about_us.html", children: [] },
    { name: "Contact Us", url: "contact_us.html", children: [] }
];

var loadMenus = function () {
    var menuBuilder = "";
    for (var i = 0; i < menuItems.length; i++) {
        var menu = menuItems[i];
        if (menu !== undefined) {
            menuBuilder = menuBuilder + "<li><a href=\"" + menu.url + "\">" + menu.name + "</a>";
            if (menu.children !== undefined && menu.children.length > 0) {
                menuBuilder = menuBuilder + appendSubMenus(menu.children);
            }
            menuBuilder = menuBuilder + "</li> ";
        }
    }
    return menuBuilder;
}

var appendSubMenus = function (children) {
    var subMenuBuilder = "<ul class=\"ggl-sub-menu\">";
    for (var i = 0; i < children.length; i++) {
        var menu = children[i];
        if (menu !== undefined) {
            subMenuBuilder = subMenuBuilder + "<li><a href=\"" + menu.url + "\">" + menu.name + "</a>";
            if (menu.children !== undefined && menu.children.length > 0) {
                subMenuBuilder = subMenuBuilder + appendSubMenus(menu.children);
            }
            subMenuBuilder = subMenuBuilder + "</li>";
        }
    }
    subMenuBuilder = subMenuBuilder + "</ul>";
    return subMenuBuilder.toString();
}

window.load = function () {
    var menus = loadMenus();
    $("#ggl-primary-menu").html(menus);
}
