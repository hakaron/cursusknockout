var viewModel = {
    genre: ko.observable(),
    artiesten: ko.observableArray()
};
var request = new XMLHttpRequest();
request.open("GET", "genres.json", true);
request.onload = function () {
    if (this.status === 200) {
        viewModel.genres = JSON.parse(this.responseText);
        ko.applyBindings(viewModel);
    }
}
request.send();
viewModel.kiesGenre = function (gekozenGenre) {
    viewModel.genre(gekozenGenre);
    request.open("GET", gekozenGenre.link.href, true);
    request.onload = function () {
        if (this.status === 200) {
            var artiesten = JSON.parse(this.responseText);
            viewModel.artiesten(artiesten);
        }
    };
    request.send();
}