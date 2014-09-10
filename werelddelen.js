var viewModel = {
    werelddelen: [{naam: "Azië", oppervlakte: 43608000,
                    landen: ["China", "India", "Maleisië"]},
                  {naam: "Afrika", oppervlakte: 30335000,
                    landen: ["Algerije", "Ghana", "Oeganda"]},
                  {naam: "Noord-Amerika", oppervlakte: 25349000,
                    landen: ["Bahama's", "Canada", "Verenigde Staten"]},
                  {naam: "Zuid-Amerika", oppervlakte: 21069501,
                    landen: ["Argentinië", "Brazilië", "Venezuala"]},
                  {naam: "Antarctica", oppervlakte: 13661000,
                    landen: []},
                  {naam: "Europa", oppervlakte: 10498000,
                    landen: ["België", "Frankrijk", "Duitsland"]},
                  {naam: "Oceanië", oppervlakte: 8468300,
                    landen: ["Australië;", "Indonesië", "Nieuw-Zeeland"]}],
    gekozenWerelddeel: ko.observable(),
    detail: function (werelddeel) {
        viewModel.gekozenWerelddeel(werelddeel);
    }
};
ko.applyBindings(viewModel);