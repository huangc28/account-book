# Accounting Book

A simple utility app that allows multiple people to edit the same account.
It's ideal budget planning app for couples and family...etc.

This app is made for jotting down daily spend / income.

## Features

  1. Able to create / read / edit / delete an expanse to an account, as well as an income.
  2. Allow multiple people to co-edit an account book.
  3. Allow monthly budgetting.
  4. [EXTRA] able to generate monthly and yearly report.
  5. [EXTRA] if we are able to sync the expanse with action payment then that would be awesome!

## Project config

```
PORT=3000
DB_HOST=35.232.107.13
DB_PORT=3306
DATABASE=accounting_book
DB_USERNAME=huangc28
DB_PASSWORD=Huang_0216
```

## TODOs

  - [x] Create table schemas and corresponding migrations.
  - [x] Transpile nodejs code with babel.js.
  - [] integrate GraphQL.
  - [] Seed user data, perform CRUD on expanses.
  - [] Get all expanses / income of the specific **date** of that **account book**.
  - [] Get user related accounting book. Each user should have one account book only.
  - [x] Add eslint.
  - [] integrate GraphQL.

## References

  - [official graphQL nodejs document](https://graphql.org/graphql-js/)
