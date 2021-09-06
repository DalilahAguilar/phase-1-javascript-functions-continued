// Your code here
function saturdayFun(skate = 'roller-skate'){
   return  `This Saturday, I want to ${skate}!`
}

const mondayWork = function (string = 'go to the office'){
    return `This Monday, I will ${string}.` 
}





function wrapAdjective(msg = 'You are'){
    return function (highlight, highlight2 = '*') {
    return `${msg} ${highlight} ${highlight2}!`
    }
}
wrapAdjective()("*");