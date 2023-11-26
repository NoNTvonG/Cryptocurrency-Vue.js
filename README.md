# Cryptocurrency

This is a project that allows tracking changes in the cryptocurrency market. All the information is provided by the "[CoinCap API 2.0](https://docs.coincap.io/)." service.


To retrieve information from the API, the "`Axios`" library was used because of its simpler syntax, JSON support, and my familiarity with it.


Additionally, for storing information and managing its state, "`Vuex`" was employed. This helped reduce the number of API requests, thereby decreasing the load on it.


The UI interface is handled by the "`Vuetify`" library, chosen for its excellent Vue support and ready-made components with adaptive design.


In the project, you can see a list of all cryptocurrencies, and there is pagination (20 items per page) to reduce the browser load and loading time.


To facilitate finding a specific cryptocurrency without navigating through pages, a search system was implemented. Users can quickly find their desired cryptocurrency by entering its name in the search bar (the search entry should be in the format: `Bitcoin`, not `BTC`).


Furthermore, users can click on a specific cryptocurrency or the chart icon, and using the "`Chart.js`" library, a chart depicting changes in the cryptocurrency market over the past year will be generated.

I using vercel for deploy. Project link: https://cryptocurrency-vue-js.vercel.app/