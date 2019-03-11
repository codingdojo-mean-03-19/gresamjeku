//Challenge 1
function print_name(array)
{
    var s='';
    for(var i=0;i<array.length;i++)
    {
        for(var key in array[i])
        {
            s += key.toUpperCase() + ':' + array[i][key] + ' ';
        }
        s += '\n';
    }
    return s;
}

//Challenge 2
function count_char(user)
{
    var s='';
    for(var key in user)
    {
        s += key.toUpperCase() + '\n';
        for(var i=0;i<user[key].length;i++)
        {
            s += i+1 + ':';
            var val_char=0;
            for(var val in user[key][i])
            {
                s += user[key][i][val] + ' ' ;
                val_char += user[key][i][val].length;
            }
            s += val_char;
            s += '\n';
        }
        s += '\n'; 
    }
    return s;
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

console.log(print_name(students))
console.log(count_char(users))