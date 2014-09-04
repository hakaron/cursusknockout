var viewModel = {
    lengte: ko.observable(1.70),
    gewicht: ko.observable(90),
    bmi: function () {
        var w = this.gewicht();
        var l = this.lengte();
        return w / (l * l);
    },
    boodschap: function () {
        var mi = this.bmi();
        if (mi < 18.5) {
            return 'ondergewicht';
        } else if (mi < 25) {
            return 'normaal gewicht';
        } else if (mi < 27) {
            return 'licht overgewicht';
        } else if (mi < 30) {
            return 'matig overgewicht';
        } else if (mi < 40) {
            return 'ernstig overgewicht';
        } else {
            return 'fel overgewicht';
        }
    },
    lichter: function () {
        this.gewicht(this.gewicht() - 1);
    },
    zwaarder: function () {
        this.gewicht(this.gewicht() + 1);
    }
};
ko.applyBindings(viewModel);