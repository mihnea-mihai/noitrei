function declination(value, plural, singular) {
    if (value > 1) {
        return value + " " + plural;
    }
    if (value == 1) {
        return value + " " + singular;
    }
    return "";
}

function refreshCountdown() {
    var now = new Date();
    var then = new Date(years = 2023, months = 6, date = 2, hours = 14);
    var diff = then - now;
    if (diff <= 0) {
        return
    }
    var diff_data = {
        "seconds": Math.floor(diff % (60 * 1000) / 1000),
        "minutes": Math.floor(diff % (60 * 60 * 1000) / (60 * 1000)),
        "hours": Math.floor(diff % (60 * 60 * 24 * 1000) / (60 * 60 * 1000)),
        "days": Math.floor(diff / (60 * 60 * 24 * 1000))
    }
    var lang_data = {
        "ro": {
            "seconds": {
                "singular": "secundă",
                "plural": "secunde"
            },
            "minutes": {
                "singular": "minut",
                "plural": "minute"
            },
            "hours": {
                "singular": "oră",
                "plural": "ore"
            },
            "days": {
                "singular": "zi",
                "plural": "zile"
            },
        }
    }
    for (const key in diff_data) {
        document.getElementById(key).innerHTML = declination(diff_data[key], lang_data['ro'][key]['plural'], lang_data['ro'][key]['singular'])
    }
}

const interval = setInterval(
    refreshCountdown, 1000
);
