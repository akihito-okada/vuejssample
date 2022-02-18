
export default class BpiData {
  bpi = []; 
  
  init(data) {
    this.bpi.push(data.data.bpi.USD, data.data.bpi.GBP, data.data.bpi.EUR)
    return this;
  }
}

