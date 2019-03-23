var _ = {
    map: function(list, iteratee){
        let new_list = [];
        for(let i=0;i<list.length;i++){
          new_list[i].push(iteratee(list[i]));
        }
        return new_list;
    },
    reduce: function(list, iteratee, memo){ 
        let value=0;
        for(let i=0;i<list.length;i++){
            value += iteratee(list[i],memo);
        }
        return value;        
    },
    find: function(list, predicate){   
        for(let i=0;i<list.length;i++){
            if(predicate(list[i])){
                return list[i];
            }
        }
    },
    filter: function(list, predicate){ 
        let new_list=[];
        for(let i=0;i<list.length;i++){
            if(predicate(list[i])){
                new_list.push(list[i]);
            }
        }
        return new_list;
    },
    reject: function(list, predicate){ 
        let new_list=[];
        for(let i=0;i<list.length;i++){
            if(!(predicate(list[i]))){
                new_list.push(list[i]);
            }
        }
        return new_list;
    }
}

console.log("MAP FUNCTION", _.map([1,2,3], function(num) {return num * 3; }));

var sum = _.reduce([1,2,3], function(num,memo) {return num+memo;}, 0);
console.log("REDUCE FUNCTION", sum);

var even = _.find([1,2,3,4,5,6], function(num) {return num % 2 == 0;})
console.log("FIND FUNCTION", even);

var evens = _.filter([1,2,3,4,5,6], function(num) { return num % 2 == 0;})
console.log("FILTER FUNCTION", evens);

var odds = _.reject([1,2,3,4,5,6], function(num) { return num % 2 == 0;})
console.log("REJECT FUNCTION", odds);