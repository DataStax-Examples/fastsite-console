<!--- STARTEXCLUDE --->
# FastSite

_60m, advanced, [Start Building](https://github.com/DataStax-Examples/fastsite-console#quick-start)_

FastSite is a no-code tool to generate content-driven websites. It leverages the power of modern JAMStack and cloud-native technologies.
<!--- ENDEXCLUDE --->

![fastsite](https://raw.githubusercontent.com/DataStax-Examples/fastsite-console/master/hero.png)

Demo Video: [https://youtu.be/3Pw0-7XqjC8](https://youtu.be/3Pw0-7XqjC8)

## Quick Start

<!--- STARTEXCLUDE --->
0. [Signup for DataStax Astra](https://dtsx.io/3DKySgr), or login to your already existing account.
<!--- ENDEXCLUDE --->
1. [Create an Astra DB Database](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db) or use an existing one.
2. [Create an Astra DB Keyspace](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace) called `sag_sites` in your database.
3. [Generate an Application Token](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token) with the role of `Database Administrator` for the Organization that your Astra DB is in.
4. Click the 'Open in Gitpod' link: [![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/todo-astra-jamstack-netlify)
5. Once the app is finished launching in the Gitpod IDE, copy the `.env.example` file to a file named `.env` and fill the required values in from your Application Token and [Astra DB connection settings](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings).
6. Start the example by running `npm run dev` in the Gitpod console.

## How this works

| Layer     | Technology                   | Provider        |
| --------- | ---------------------------- | --------------- |
| Front-end | SPA/ SPA-SSR/ Static website | Netlify/ Vercel |
| Back-end  | Serverless Functions         | Netlify/ Vercel |
| Database  | Cloud-native NoSQL DB        | DataStax Astra  |
