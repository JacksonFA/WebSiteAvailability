# API WebSite Availability

## Run Project:

1. Run `yarn` command to install dependencies;
2. Setup environment and database settings inside `src/Config/default.ts` file;
3. Run `yarn dev:server` command to init service;
4. To test the api routes, import the `RequestTest(Insomnia).json` file into Insomnia;

## About API:

* The API uses MongoDB to store the URLs that need to be monitored and their monitoring history;
* Registered URLs can be modified or deleted;
* Every 60 seconds, a request is made for each URL registered so far, and the request's return data is registered in the database, such as Status and response time;
* You can view the tracking history of all URLs at the same time or view the history of a specific URL;