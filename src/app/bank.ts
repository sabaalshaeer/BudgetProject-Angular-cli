export class Account {
  public id: number| null
  public accId: number | null
  public name: string
  public type: string
  public balance: number

  constructor(id: number | null,accId: number | null, name: string, type: string, balance: number) {
    this.id = id
    this.accId = id
    this.name = name
    this.type = type
    this.balance = balance
  }
}



export class Distination {
  public id: number| null
  public disId: number | null
  public name: string
  public budget: number

  constructor(id: number | null, disId: number | null,name: string, budget: number) {
    this.id = id
    this.disId = id
    this.name = name
    this.budget = budget
  }
}

export class Budget {
  public id: number| null
  public budId: number | null
  public name: string
  public total: number

  constructor(  id: number| null, budId: number, name: string, total: number) {
    this.id = id
    this.budId = id
    this.name = name
    this.total = total
  }
}

export class Transaction {
  public id: number| null
  public transId: number | null = null
  public source: string
  public distination: string
  public description: string
  public amount: number
  public budget: number

  constructor(id: number | null, transId: number | null, source: string, distination: string, description: string ,amount: number, budget: number)  {
    this.id = id
    this.transId = transId
    this.source = source
    this.distination = distination
    this.description = description
    this.amount = amount
    this.budget = budget
  }
}

