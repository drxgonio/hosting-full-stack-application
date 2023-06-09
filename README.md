# Udacity

This application is provided to you as an alternative starter project if you do not wish to host your own code done in the previous courses of this nanodegree.
We have 2 project. Backend and Front-end
Back end using NodeJs, Express, Postgres
Front end using Angular


### Dependencies
A list of project dependencies:
The dependencies required to run the project are listed as follows:
- Node v14.15.1 (LTS) or more recent.
- `npm` 6.14.8 (LTS) or more recent.
- AWS CLI v2, v1 can work but was not tested for this project.
- A RDS database running Postgres.
- A S3 bucket for hosting uploaded pictures.
- 
### Environment for BE sample:
 ```
PORT=8080
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=hosting
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=2105
AWS_DEFAULT_REGION=eu-west-3
AWS_PROFILE=default
AWS_BUCKET=testtripv1
URL="http://localhost"
JWT_SECRET=abcdefjghkszxc
```

### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv).
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start` or `ng serve`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). 
Follow these steps to run the tests:

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End-to-End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework
