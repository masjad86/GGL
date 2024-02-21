function loadContacts() {
    $.getJSON("data/contact.json", function (json) {
        if (json !== undefined) {
            var contactBuilder = "";
            for (var i = 0; i < json.contacts.length; i++) {
                var contact = json.contacts[i];
                if (contact !== undefined) {
                    contactBuilder = contactBuilder + "<div class=\"col-md-12 well\">";
                    contactBuilder = contactBuilder + "<div class=\"col-md-4 circle\"><img src=\""+contact.image+"\" width=\"256\" height=\"256\" /></div>";
                    contactBuilder = contactBuilder + "<div class=\"col-md-8\"><div class=\"contact\"><div class=\"desc\">" + contact.name + "</div></div>";
                    if (contact.mobile !== undefined && contact.mobile.length > 0) {
                        contactBuilder = contactBuilder + "<div class=\"row-top-padded-xs\">" + appendNumber(contact.mobile) + "</div>";
                    }

                    if (contact.email !== undefined) {
                        contactBuilder = contactBuilder + "<div class=\"row-top-padded-xs\">" + contact.email + "</div>";
                    }

                    if (contact.phone !== undefined && contact.phone.length > 0) {
                        contactBuilder = contactBuilder + "<div class=\"row-top-padded-xs\">" + appendNumber(contact.phone) + "</div>";
                    }

                    if (contact.address !== undefined && contact.address.length > 0) {
                        contactBuilder = contactBuilder + "<div class=\"row-top-padded-xs\">" + contact.address + "</div>";
                    }

                    //additional information
                    if (contact.notes !== undefined && contact.notes.length > 0) {
                        contactBuilder = contactBuilder + "<div class=\"row-top-padded-xs\">" + contact.notes + "</div>";
                    }
                    contactBuilder = contactBuilder + "</div></div>";
                }
            }

            $("#contacts").html(contactBuilder);
        }
    });
}
function appendNumber(numbers) {
    var numberString = "";
    for (var j = 0; j < numbers.length; j++) {
        var number = numbers[j];
        numberString = numberString + number + "|";
    }

    if (numberString.lastIndexOf("|") !== -1) {
        numberString = numberString.substring(0, numberString.length - 1);
    }

    return numberString;
}

function original(contact) {
    if (contact !== undefined) {
        contactBuilder = contactBuilder + "<div class=\"col-md-6 animate-box\">";
        contactBuilder = contactBuilder + "<div class=\"contact-us\">";
        contactBuilder = contactBuilder + "<div class=\"desc\">";
        contactBuilder = contactBuilder + "<h3>" + contact.name + "</h3>";

        if (contact.mobile !== undefined && contact.mobile.length > 0) {
            contactBuilder = contactBuilder + "<p>Mobile# : <b>" + appendNumber(contact.mobile) + "</b></p>";
        }

        if (contact.email !== undefined && contact.email.length > 0) {
            contactBuilder = contactBuilder + "<p>Email : <b>" + contact.email + "</b></p>";
        }

        if (contact.phone !== undefined && contact.phone.length > 0) {
            contactBuilder = contactBuilder + "<p>Landline# : <b>" + appendNumber(contact.phone) + "</b></p>";
        }

        if (contact.address !== undefined && contact.address.length > 0) {
            contactBuilder = contactBuilder + "<p>" + contact.address + "</p>";
        }

        //additional information
        if (contact.notes !== undefined && contact.notes.length > 0) {
            contactBuilder = contactBuilder + "<p>" + contact.notes + "</p>";
        }
        contactBuilder = contactBuilder + "</div></div></div>";
    }
}
window.document.body.onload = loadContacts();