var scrapy = require('node-scrapy')
  , url = 'https://www.uspreventiveservicestaskforce.org/BrowseRec/Index'
  , model =
    {
      recommendation: {
        name: {
          selector: 'table#gridRecommendations > tbody > tr > td:first-child > a',
        },
        link: {
          selector: 'table#gridRecommendations > tbody > tr > td:first-child > a',
          get: 'href',
          prefix: 'https://www.uspreventiveservicestaskforce.org',
        },
        type: {
          selector: 'table#gridRecommendations > tbody > tr > td:nth-child(2)'},
        year: {
          selector: 'table#gridRecommendations > tbody > tr > td:nth-child(3)'},
        group: {
          selector: 'table#gridRecommendations > tbody > tr > td:nth-child(4)'},
      },
  }

scrapy.scrape(url, model, function(err, data) {
    if (err) return console.error(err)
    console.log(data);
});
