$('document').ready(function() {
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/">HOME</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/politics.html">POLITICS</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/governance.html">GOVERNANCE</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/covid-19.html">COVID-19</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/corporate.html">CORPORATE</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/columns.html">COLUMNS</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/newsmaker.html">NEWSMAKER</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/youth.html">YOUTH</a></li>')
    $("#nav-bar-ul").append('<li class="nav-item active"><a class="nav-link" href="/potpourri.html">POTPOURRI</a></li>')

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toDateString();

    $('head').append('<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">');
    $('head').append('<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">');
    $('head').append('<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">');
    $('head').append('<link rel="manifest" href="/site.webmanifest">');

}
)