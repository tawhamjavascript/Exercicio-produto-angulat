export class Produto {
  constructor(public name: string = "", public price: number = 0.0, public description: string = "",
              public image: string = "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              public id: number = Number(Math.random() * 100000000,)) {
  }
}
