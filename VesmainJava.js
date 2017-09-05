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
  series: [9, 2, 1]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
var data = {
  series: [7, 6, 1]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});


new Chartist.Bar('.ct-chart4', {
  labels: ['Belarus', 'Poland', 'France', 'Turkey', 'Italy', 'Germany', 'Ireland'],
  series: [20, 60, 120, 200, 180, 20, 10]
}, {
  distributeSeries: true
});

new Chartist.Bar('.ct-chart5', {
  labels: ['Belarus', 'Poland', 'France', 'Turkey', 'Italy', 'Germany', 'Ireland'],
  series: [80, 90, 10, 100, 60, 30, 50]
}, {
  distributeSeries: true
});
/*var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data);*/