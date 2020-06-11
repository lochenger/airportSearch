# airportSearch
JS Project built using Algolia InstantSearch.js

### [GH-page](https://lochenger.github.io/airportSearch/airportsearch/)

Utilizing the airports [database](https://github.com/algolia/datasets) and the wealth of information from [Algolia InstantSearch](https://community.algolia.com/#instantsearch), I built out a basic airport search interface based on the following attributes of an airport: name, city, country, and iata_code.  I ranked the airports based on the number of airports they are connected to. Not surprisingly, the United States had 5 out of the top 10 most connected airports worldwide!

I created an airports index based on the json file provided, and set the searching, ranking, and facet filtering criteria of the dataset. I created replica indices for the purpose of the sort-by widget, and enabled searchable filtering widgets as well as other searching refinements. I used the basic InstantSearch.js vanilla JavaScript UI library to build out this interface, but I also plan on learning and leveraging the React and Angular UI libraries available for future projects.

### Next steps:
- Finish out the geo-tag Google maps feature of searching through the airports
- Attach ITA matrix search queries based on the search results generated based on the filtering


### Feedback:
- Since the InstantSearch project files are pre-made based on an Algolia Index, it would be helpful to specify in the documentation which file should be used for each feature
- Documentation tutorials and the interactive CodeSandbox demos were clear and concise, and helped me start off my project fairly quickly
- I would also like to put together a GH-page tutorial on how to quickly get an Algolia Search launched on the web, I accidentally nested a Algolia project inside a GH-page branch


# Customer Questions:
---
>Question 1:
>
>Hello,
>
>I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if >you could provide me with some definitions of the following concepts:
>
> * Records
> * Indexing
>
>I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
>
>Cheers, George

Hi George,

Thank you for reaching out, I will try to help you better understand some concepts!

* Records are the pieces of data that are returned by search engines based on a particular search term.
* Indexing is the process of organizing, sorting, and storing records by attributes so that records can be easily searched and retrieved.

For example, an airport can have the record that looks like: { "name": "Hartsfield Jackson Atlanta Intl", "city": "Atlanta", "country": "United States", "code": "ATL”,}, and the attributes for the record would be “name, city, country, code.” The airports can be indexed based on any of the attributes listed and can be easily searchable with a search term such as “Atlanta” or “ATL.”

Custom Ranking is a method of ordering search results in addition to the default alphabetical or other ordering of attributes. It is a direct and powerful way of adapting Algolia to your search needs. If there are multiple records that return the same result- for example the results for a “jacket” query at an e-commerce store - the custom ranking can be set up so that the best selling jacket or price point of the jacket can be used to rank the search results.

Our documentation for additional information:
* Records: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/what-is-in-a-record/#an-example-of-a-typical-record
* Indexing: https://www.algolia.com/doc/api-client/methods/indexing/#creating-indices
* Customer Ranking: https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#custom-ranking

Please let me know if you have any other questions!

Thanks,
Long

---
>Question 2:
>Hello,
>
>Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
>
>Regards, Matt


Hi Matt,

Thank you for taking the time to share your valuable feedback!

Could you please elaborate on how you are iterating through the index features on the dashboard? I would like to better understand what’s causing the inconvenience so that I can inform the product design team on the details.

Thanks,
Long

---
>Question 3:
>Hi,
>
>I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
>
>Regards, Leo


Hi Leo,

Algolia was designed to make the integration of search and analytics into your website as easy and smooth as possible. However some additional development work will be necessary for more advanced features.

The high level process looks like this:
1. Create a new index to store data that you want to make searchable in Algolia
2. Upload your data into the Algolia servers, which can be done via API or using our Dashboard user interface
3. Select the attributes of your data that you want to make searchable. You may also use a custom ranking attribute to order your results by a metric that's important to your business goals.
4. Build a search user interface, which can be done using our InstantSearch UI components and require minimal development work

In minutes, you can get a fully-functional search UI with minimal development work, or you can fully customize your search widgets to match your needs with a little bit more development. Our platform supports a number of languages and frameworks, and we also have a UI that can be configured by a business user.

Here is a quick demo of how to leverage InstantSearch to make an UI for an e-commerce site: https://codesandbox.io/s/github/algolia/doc-onboarding/tree/master/demos/instantsearchjs/ecommerce

Please let me know what your website currently looks like, and I can try to provide more tailored information on how to best implement Algolia.

Thanks,
Long
