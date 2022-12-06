export class Bank_account {

  public accId: number
  public name: string
  public type: string
  public balance: number

  constructor(id: number, name: string, type: string, balance: number) {
    this.accId = id
    this.name = name
    this.type = type
    this.balance = balance
  }
}

export class Distination {
  public disId: number
  public name: string
  public budget: number

  constructor(id: number, name: string, budget: number) {
    this.disId = id
    this.name = name
    this.budget = budget
  }
}

export class Budget {
  public budId: number
  public name: string
  public total: number

  constructor(id: number, name: string, total: number) {
    this.budId = id
    this.name = name
    this.total = total
  }
}

export class Transaction {
  public transId: number | null
  public source: string
  public distination: string
  public description: string
  public amount: number
  public budget: number

  constructor(id: number | null, source: string, distination: string, description: string ,amount: number, budget: number) {
    this.transId = id
    this.source = source
    this.distination = distination
    this.description = description
    this.amount = amount
    this.budget = budget
  }
}

