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

 
      