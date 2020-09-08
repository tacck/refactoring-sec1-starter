'use strict'

const { statement } = require('./statement')

// -- テストデータの実行
const plays = require('./plays.json')
const invoices = require('./invoices.json')

invoices.forEach((invoice) => {
  const result = statement(invoice, plays)
  console.log(result)
})
