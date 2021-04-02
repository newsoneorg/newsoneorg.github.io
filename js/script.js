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
}
)