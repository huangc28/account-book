const {
  EXPANSE,
  INCOME,
} = require('../../constants/cashFlowTypes')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('expanses').del()
    .then(function () {
      // Inserts seed entries
      return knex('expanses').insert([
        {
          id: 1,
          user_id: 1,
          account_book_id: 1,
          action: EXPANSE,
          amount: 123,
        },
        {
          id: 2,
          user_id: 2,
          account_book_id: 2,
          action: INCOME,
          amount: 482,
        },
        {
          id: 3,
          user_id: 3,
          account_book_id: 3,
          action: EXPANSE,
          amount: 937,
        },
      ]);
    });
};
