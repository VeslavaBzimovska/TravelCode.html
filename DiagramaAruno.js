var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart1', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});


var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});


new Chartist.Bar('.ct-chart4', {
  labels: ['Thriller', 'Back In Black', 'The Dark Side of the Moon', 'The Bodyguard', 'Bat Out Hell', 'Eagles Greatest Hits (1971-1975)', 'Saturday Night Fever', 'Rumours' ],
  series: [65, 50, 45, 44, 43, 42, 40, 40]
}, {
  distributeSeries: true
});