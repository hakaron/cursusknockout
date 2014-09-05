var viewModel = {
    boodschap: function () {
        var h = new Date().getHours();
        if (h < 6) {
            return 'Goede nacht';
        } else if (h < 10) {
            return 'Goede morgen';
        } else if (h < 18) {
            return 'Goede middag';
        } else {
            return 'Goede avond';
        }
    },
    afbeelding: function () {
        var h = new Date().getHours();
        if (h < 6) {
            return 'nacht';
        } else if (h < 10) {
            return 'morgen';
        } else if (h < 18) {
            return 'middag';
        } else {
            return 'avond';
        }
    }
};
ko.applyBindings(viewModel);