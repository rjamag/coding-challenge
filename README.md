# Coding Challenge

This is a React+Node+GraphQL coding challenge based on the React & Apollo Tutorial.

- Front-End: React and Apollo
- Back-End: Node.js, Express and GraphQL - Prisma
- Tests: Jest, Enzyme and Wallaby

This is the sample project that belongs to the [React & Apollo Tutorial](https://www.howtographql.com/react-apollo/0-introduction/) on How to GraphQL.

## Running the App

### 1. Clone repository

```sh
git clone https://github.com/rjamag/coding-challenge/
cd coding-challenge
```

### 2. Deploy the Prisma database service

```sh
cd server
yarn install
prisma deploy
```

> You can use the `prisma` CLI without having it globally installed because it's listed as a _development dependency_ in `package.json`.

When prompted where (i.e. to which _cluster_) you want to deploy your service, choose any of the public clusters, e.g. `public-us1` or `public-eu1`. (If you have Docker installed, you can also deploy locally.)

### 3. Set the Prisma service endpoint

From the output of the previous command, copy the `HTTP` endpoint and paste it into `server/src/index.js` where it's used to instantiate the `Prisma` binding. You need to replace the current placeholder `__PRISMA_ENDPOINT`:

```js
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: "__PRISMA_ENDPOINT__",
      secret: 'mysecret123',
    }),
  }),
})
```

For example:

```js
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: "https://eu1.prisma.sh/public-hillcloak-flier-942261/hackernews-graphql-js/dev",
      secret: 'mysecret123',
    }),
  }),
})
```

Note that the part `public-hillcloak-flier-952361` of the URL is unique to your service.

### 4. Start the server

To start the server, all you need to do is execute the `start` script by running the following command inside the `server` directory:

```sh
yarn install
yarn start
```

### 5. Run the app

Now that the server is running, you can run the app as well (the command needs to be run in a new terminal tab/window inside the root directory `coding-challenge`):

```sh
yarn start
```

You can now open your browser and use the app on `http://localhost:3000`.

### 6. Build the app

To create a production build, use the following command (the command needs to be run in a new terminal tab/window inside the root directory `coding-challenge`):

```sh
yarn build
```

### 7. Demo Application

Demo app is running on two separate Docker containers at Heroku

https://radiant-bastion-73738.herokuapp.com
