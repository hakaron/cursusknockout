var viewModel = {
    bestelling: ko.observableArray(),
    producten: [{ naam: "Kleine friet", prijs: 1.75 },
                { naam: "Medium friet", prijs: 2.15 },
                { naam: "Grote friet", prijs: 2.5 },
                { naam: "Mayonaise", prijs: 0.65 },
                { naam: "Kippenboutjes", prijs: 3.25 },
                { naam: "Stoofvlees", prijs: 4.35 }
               ],
    toevoegen: function () {
        this.bestelling.push({
            product: ko.observable({
                naam: "Maak een keuze",
                prijs: 0
            }),
            aantal: ko.observable(1)
        });
        document.querySelector("tbody tr:last-child td:first-child select").focus();
    },
    totaal: function () {
        var totaal = 0;
        var besteld = this.bestelling();
        for (var i = 0; i < besteld.length; i++) {
            var product = besteld[i].product();
            var aantal = besteld[i].aantal();
            if (product != undefined && !isNaN(product.prijs) && aantal != undefined && !isNaN(aantal)) {
                totaal += product.prijs * aantal;
            }
        }
        return totaal;
    }
};
ko.applyBindings(viewModel);