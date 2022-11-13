function declination(value, plural, singular) {
    if (value>1) {
        return value + ' ' + plural;
    }
    if (value == 1) {
        return value + ' ' + singular;
    }
    return '';
}

function refresh() {
    var now = new Date();
    var then = new Date(years=2023, months=6, date=2, hours=14);
    var diff = new Date(then - now);
    var years = diff.getUTCFullYear() - 1970;
    var months = diff.getUTCMonth();
    var days = diff.getUTCDate() - 1;
    var hours = diff.getUTCHours();
    var minutes = diff.getUTCMinutes();
    var seconds = diff.getUTCSeconds();
    
    document.getElementById('years').innerHTML = declination(years, 'ani', 'an');
    document.getElementById('months').innerHTML = declination(months, 'luni', 'lună');
    document.getElementById('days').innerHTML = declination(days, 'zile', 'zi');
    document.getElementById('hours').innerHTML = declination(hours, 'ore', 'oră');
    document.getElementById('minutes').innerHTML = declination(minutes, 'minute', 'minut');
    document.getElementById('seconds').innerHTML = declination(seconds, 'secunde', 'secundă');
}

function initCountdown() {
    const interval = setInterval(
        refresh, 1000
    );
}
