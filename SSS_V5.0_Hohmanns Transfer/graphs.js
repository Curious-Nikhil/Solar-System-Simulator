function update(data, options, override) {
  if(data) {
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'update',
      data: this.data
    });
  }

  if(options) {
    this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

    // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
    // Otherwise we re-create the optionsProvider at this point
    if(!this.initializeTimeoutId) {
      this.optionsProvider.removeMediaQueryListeners();
      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    }
  }

  // Only re-created the chart if it has been initialized yet
  if(!this.initializeTimeoutId) {
    this.createChart(this.optionsProvider.getCurrentOptions());
  }

  // Return a reference to the chart object to chain up calls
  return this;
}


var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};

var options = {
  width: 500,
  height: 500
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data, options);
