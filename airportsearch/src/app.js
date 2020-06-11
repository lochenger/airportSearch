/* global algoliasearch instantsearch */

const searchClient = algoliasearch('QB5ZHPPT5Q', '2d1d8510a37ccfc4d3331ade6703ff43');

const sortByName = false;
const indexName = sortByName ? 'nameAirports' : 'dev_Long';

const search = instantsearch({
  indexName: indexName,
  searchClient: searchClient,
  rounting: true,

  // Hides results if query === null
  // searchFunction(helper) {
  //   const container = document.querySelector('#hits');
  //   container.style.display = helper.state.query === '' ? 'none' : '';
  //
  //   helper.search();
  // }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search for an airport",
    autofocus: true,
  })
);

// search.addWidget(
//   instantsearch.widgets.geoSearch({
//     container: '#maps',
//     googleReference: window.google,
//     // initialPosition: {
//     //   lat: 40.71,
//     //   lng: -74.01,
//     // },
//     // mapOptions: {
//     //   mapTypeId: window.google.maps.MapTypeId.SATELLITE,
//     // },
//   })
// );

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
            <article>
              <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
              <h4>{{#helpers.highlight}}{ "attribute": "city" }{{/helpers.highlight}}</h4>
              <p>{{#helpers.highlight}}{ "attribute": "country" }{{/helpers.highlight}}</p>
            ` + iataHitsFrom('{{#helpers.highlight}}{ "attribute": "iata_code" }{{/helpers.highlight}}') + `
            </article>
            `,
      // item(hit) {
      //   return `👉 ${hit.name}`;
        // `
        //   <article>
        //     <p>Name: ${instantsearch.highlight({ attribute: 'name', highlightedTagName: 'mark', hit })}</p>
        //     <p>Name: ${instantsearch.snippet({ attribute: 'city', highlightedTagName: 'mark', hit })}</p>
        //   </article>
        // `;
      // },
      empty: `<div>
                <p>No results have been found for {{ query }}</p>
              </div>.`,
    },
  })
);

function iataHitsFrom(iata_code) {
  return '<p>Book flight from 👉<a href="'
            + 'https:\/\/www.google.com/search?q=google+flights+from+' + iata_code
            + '">' +iata_code+ '</a></p>';
            // + '<p style = "text-indent:6em;">to 👉<a href="'
            //         + 'https:\/\/www.google.com/search?q=google+flights+to+' + iata_code
            //         + '">' +iata_code+ '</a></p>';
}

// function iataHitsTo(iata_code) {
//   return
// }

// const customHits = instantsearch.connectors.connectHits(
//   (renderOptions, isFirstRender) => {
//     const {results, widgetParams} = renderOptions;
//     const {container} = widgetParams;
//
//     container.innerHTML =
//       results && results.query ? '<div>Search for query "${results.query}".</div>'
//       : '<div>No query</div>';
//       console.log(results)
//   }
// );
//
// search.addWidget(
//   customHits({
//     container: document.querySelector('#hits')
//   })
// );

search.addWidget(
  instantsearch.widgets.sortBy({
    container: "#sort-by",
    items: [
      {label: 'Airport Connections', value: 'dev_Long'},
      {label: 'Airport Name', value: 'nameAirports'},
      {label: 'Airport City', value: 'cityAirports'},
    ]
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#refinementList",
    attribute: "country",
    showMore: true,
    searchable: true,
    searchablePlaceholder: 'Search countries',
    sortBy: ['count:desc'],
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#cityList",
    attribute: "city",
    showMore: true,
    searchable: true,
    searchablePlaceholder: 'Search cities',
    sortBy: ['count:desc'],
  })
);

search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: "#connections",
    attribute: "links_count",
    max: 1826,
    pips: false,
  })
)

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
);

search.start();
