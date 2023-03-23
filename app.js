console.log("Hello World!\n==========\n");


function printOdds(count) {
    for (let i = 1; i <= Math.abs(count); i++){
        if(i % 2 != 0){
            console.log(i * Math.sign(count));
    }
    }
   } 

printOdds(-10);
printOdds(100);




function checkAge(userName, age){
    let oldEnough = `Congrats ${userName}! You are old enough to drive!`;
    let tooYoung = ` sorry ${userName}, you are not old enough to drive! You have ${
         16 - age} year(s) until you can drive`;

         if (age < 16){
            console.log(tooYoung);
         }else {
            console.log(oldEnough);
         }
         
        }
    
        checkAge("Diamond", 21);
        checkAge("Celeste", 15);
        checkAge("Ivan", 20);
        
        
        function checkQuadrant(x,y){
            if (x > 0 && y > 0){
                return 1;
            }else if (x < 0 && y > 0){
                return 2;
            }else if (x < 0 && y < 0){
                return 3;
            }else if ( x > 0 && y < 0){
                return 4;
            }else if ( x == 0 && y != 0){
                return " X axis";
            }else if (x != 0 && y == 0){
                return " Y axis";
            }else{
                return "Origin";
            }
        }

console.log(checkQuadrant(1,1));
console.log(checkQuadrant(-1,-1));
console.log(checkQuadrant(-1,1));
console.log(checkQuadrant(1,-1));
console.log(checkQuadrant(0,1));
console.log(checkQuadrant(1,0));
console.log(checkQuadrant(0,0));        

        function isTriangle(side1,side2,side3){
            return (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2)

        }

        function checkTriangle (side1,side2,side3){
         let isValid = isTriangle(side1,side2,side3);
         if (isValid){
            if (side1 == side2 && side2 == side3){
                return `equilateral`;
            }else if (side1 == side2 || side2 == side3 || side1 == side3){
                return`isosceles`;
            }else {
                return `Scalene`;
            }
         }   else {
            return `Not a valid triangle.`;
         }
        }
     console.log(checkTriangle(2,3,4));
     console.log(checkTriangle(5,5,5));
     console.log(checkTriangle(1,2,2));
     console.log(checkTriangle(1,1,2));


     
     function dataFeedback(planLimit, day, usage){
        let periodLenght = 30;
      let currentAvg = usage / day;
      let projectedAvg = planLimit / periodLenght;
      let remainingDays = periodLenght - day;
      let projectedUsage = remainingDays * currentAvg;
      let remainingData = periodLenght - usage;
      let statusMsg; 
     
     

     console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);  
     console.log(`Average projected daily use: ${projectedAvg.toFixed(2)} GB per day`);
     
     if (currentAvg > projectedAvg){
        statusMsg = "exceeding";
     }else if (currentAvg < projectedAvg){
        statusMsg = "under"
     }else{
        statusMsg = "at";
     }
     
     console.log(`You are currently ${statusMsg} your daily use (${currentAvg.toFixed(2)} GB per day),
     continuing this usage, you will end up usuing ${planLimit - (usage + projectedUsage)} GB from your data limit.`);
    console.log(`To stay below your data plan, use ${(remainingData / remainingDays).toFixed(2)}.`); 
    }
     dataFeedback(50, 9, 25);
     
