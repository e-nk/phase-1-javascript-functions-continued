// code your solution here
function saturdayFun(activity='roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
  
function mondayWork (activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}
  
function wrapAdjective (asteri='*'){
    return function worker(description='a hard worker'){
      return `You are ${asteri}${description}${asteri}!`;
    }
}