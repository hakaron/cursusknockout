var viewModel = {
    genre: ko.observable(),
    artiesten: ko.observableArray()
};
Sammy(function () {
    this.get("#genres/:nummer", function () {
        var genreNummer = parseInt(this.params["nummer"]);
        if (viewModel.genres === undefined) {
            vulGenres();
        }
        vulArtiesten(genreNummer);
    });
    this.get("", function () {
        if (viewModel.genres === undefined) {
            vulGenres();
        }
        viewModel.artiesten.removeAll();
    });
}).run();
function vulGenres() {
    var request = new XMLHttpRequest();
    request.open("GET", "genres.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            viewModel.genres = JSON.parse(request.responseText);
            ko.applyBindings(viewModel);
        }
    }
    request.send();
}
function vulArtiesten(genreNummer) {
    var request = new XMLHttpRequest();
    request.open("GET", "genres." + genreNummer + ".artists.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var artiesten = JSON.parse(request.responseText);
            viewModel.artiesten(artiesten);
        }
    }
    request.send();
}