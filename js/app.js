// app.js


var app = {};

app.getWindowSize = function() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    app.x = x;
    app.y = y;

};

app.getWindowSize();

//app.hero = document.getElementById('js-hero');
//app.headlineWrapper = document.getElementById('js-headline-wrapper');

app.setSize = function (el) {
    el.style.height = (app.y * 0.75) + "px";
    el.style.width = app.x + "px";
}

app.setHeight = function (el) {
    el.style.height = (app.y * 0.75) + "px";
}

//app.setSize(app.hero);
//app.setHeight(app.headlineWrapper);

window.onresize = function() {
     app.getWindowSize();
     
     //app.setSize(app.hero);
     //app.setHeight(app.headlineWrapper);
}
