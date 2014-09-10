var viewModel = {
    dagen : [ {naam:"maandag", neerslag:ko.observable()},
              {naam:"dinsdag", neerslag:ko.observable()},
              {naam:"woensdag", neerslag:ko.observable()},
              {naam:"donderdag", neerslag:ko.observable()},
              {naam:"vrijdag", neerslag:ko.observable()},
              {naam:"zaterdag", neerslag:ko.observable()},
              {naam:"zondag", neerslag:ko.observable()}
            ],
    gemiddelde: function () {
        var ingevuldeTemperaturen = this.dagen.filter(
            function(element) {return !isNaN(element.neerslag());});
        var aantalIngevuldeTemperaturen = ingevuldeTemperaturen.length;
        if (aantalIngevuldeTemperaturen === 0) {
            return "";
        }
        var somTemperaturen = ingevuldeTemperaturen.reduce(
            function(previousValue, element){
                return previousValue + parseInt(element.neerslag());}, 0);
        return somTemperaturen / aantalIngevuldeTemperaturen;
    }
};
ko.applyBindings(viewModel);
document.querySelector("tbody tr:first-child td:nth-child(2) input").focus();