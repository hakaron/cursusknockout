var viewModel = {
    verkopen: [{ seizoen: "Lente", verkoop: ko.observable(), percentage: ko.observable(0) },
              { seizoen: "Zomer", verkoop: ko.observable(), percentage: ko.observable(0) },
              { seizoen: "Herfst", verkoop: ko.observable(), percentage: ko.observable(0) },
              { seizoen: "Winter", verkoop: ko.observable(), percentage: ko.observable(0) }
    ],
    totaal: function () {
        var ingevuldeVerkopen = this.verkopen.filter(
            function (element) { return !isNaN(element.verkoop()) && !isNaN(parseInt(element.verkoop())); });
        var aantalIngevuldeVerkopen = ingevuldeVerkopen.length;
        if (aantalIngevuldeVerkopen === 0) {
            return "";
        }
        var somVerkopen = ingevuldeVerkopen.reduce(
            function (previousValue, element) {
                return previousValue + parseInt(element.verkoop());}, 0);
        if (isNaN(somVerkopen)) {
            return 0;
        }
        else {
            for (var i = 0; i < this.verkopen.length; i++) {
                var verkoopstat = viewModel.verkopen[i];
                var procent = verkoopstat.verkoop() / somVerkopen * 100;
                if (isNaN(procent)) { procent = 0 }
                verkoopstat.percentage(Math.round(procent));
            }
            return somVerkopen;
        }
    }
};
ko.applyBindings(viewModel);
document.querySelector("tbody tr:first-child td:nth-child(2) input").focus();