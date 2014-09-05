var dagrij = [];
var maandrij = [];
for (var i = 0; i < 31; i++) {
    dagrij.push(i + 1);
}
for (var i = 0; i < 12; i++) {
    maandrij.push(i + 1);
}
var viewModel = {
    dagen: dagrij,
    maanden: maandrij,
    dag: ko.observable(),
    maand: ko.observable(),
    sterrenbeeld: function () {
        if (this.maand > 12 || this.maand < 1) {
            return 'error';
        }
        switch (this.maand()) {
            case 1:
                return this.dag() <= 20 ? 'steenbok' : 'waterman';
            case 2:
                return this.dag() <= 19 ? 'waterman' : 'vissen';
            case 3:
                return this.dag() <= 21 ? 'vissen' : 'ram';
            case 4:
                return this.dag() <= 21 ? 'ram' : 'stier';
            case 5:
                return this.dag() <= 21 ? 'stier' : 'tweeling';
            case 6:
                return this.dag() <= 21 ? 'tweeling' : 'kreeft';
            case 7:
                return this.dag() <= 22 ? 'kreeft' : 'leeuw';
            case 8:
                return this.dag() <= 23 ? 'leeuw' : 'maagd';
            case 9:
                return this.dag() <= 23 ? 'maagd' : 'weegschaal';
            case 10:
                return this.dag() <= 23 ? 'weegschaal' : 'schorpioen';
            case 11:
                return this.dag() <= 22 ? 'schorpioen' : 'boogschutter';
            case 12:
                return this.dag() <= 21 ? 'boogschutter' : 'steenbok';
            default:
                return 'error';
        }
    }
};
ko.applyBindings(viewModel);