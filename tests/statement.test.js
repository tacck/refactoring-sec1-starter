import { statement } from '../src/statement'

describe('check statement', () => {
  it('plain tesxt invoice test', () => {
    const plays = require('plays.json')
    const invoices = require('invoices.json')
    const expectedResults = [
      {
        customer: 'BigCo',
        result:
          'Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n',
      },
    ]

    invoices.forEach((invoice) => {
      const expected = expectedResults.find(
        (result) => result.customer === invoice.customer,
      )

      const result = statement(invoice, plays)
      expect(result).toBe(expected.result)
    })
  })

  it('play.type is not exists', () => {
    const plays = {
      hamlet: { name: 'Hamlet', type: 'tragedy' },
      'as-like': { name: 'As You Like It', type: 'comedy' },
      othello: { name: 'Othello', type: 'tragedy' },
      notexists: { name: 'Othello', type: 'NotExistsType' },
    }

    const invoices = [
      {
        customer: 'notexists',
        performances: [
          {
            playID: 'notexists',
            audience: 20,
          },
        ],
      },
    ]

    invoices.forEach((invoice) => {
      expect(() => statement(invoice, plays)).toThrow(Error)
    })
  })
})
