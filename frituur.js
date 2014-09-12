var viewModel = {
    bestelling: ko.observableArray(),
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
var request = new XMLHttpRequest();
request.open("GET", "producten.json", true);
request.onload = function () {
    if (this.status === 200) {
        viewModel.producten = JSON.parse(this.responseText);
        ko.applyBindings(viewModel);
    }
}
request.send();