const student={       //object
  Name:"vishal",
  age:22,
  eng:93,
  math:95,
  phy:97,
  getAvg(){         //method
    // let avg=(this.eng+this.math+this.phy)/3;
    // console.log(avg);
    let avg=(this.eng+this.math+this.phy)/3;
    console.log(`${this.Name} got avg marks=${avg}`);
  }
}