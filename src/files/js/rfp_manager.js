function RFPManager() {
  var availabilityWindows = {
    "2014": {
      "opens": "2014-05-05T00:00:00.000Z",
      "closes": "2014-08-16T00:00:00.000Z"
    }
  };

  this.isAcceptingProposals = function() {
    var now = new Date();
    var annualDates = availabilityWindows[now.getFullYear()];
    return Date.parse(annualDates.opens) <= now &&
           Date.parse(annualDates.closes) >= now;
  };
}