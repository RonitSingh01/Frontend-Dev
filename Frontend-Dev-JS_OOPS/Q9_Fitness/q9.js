
class FitnessAnalytics{
  constructor(data){
    if(data.length===0) throw new Error("Dataset cannot be empty");
    this.data = data;
  }
  getActiveUsers(){
    return this.data.filter(u=>u.steps > 7000);
  }
  getAverageCalories(){
    return this.data.reduce((a,b)=>a+b.calories,0) / this.data.length;
  }
  getUserSummary(){
    return this.data.map(u=>`${u.user} burned ${u.calories} calories`);
  }
}

const d = [
 {user:"A",steps:8000,calories:300},
 {user:"B",steps:12000,calories:500},
 {user:"C",steps:4000,calories:200}
];

const fa = new FitnessAnalytics(d);
console.log(fa.getActiveUsers());
console.log(fa.getAverageCalories());
console.log(fa.getUserSummary());
