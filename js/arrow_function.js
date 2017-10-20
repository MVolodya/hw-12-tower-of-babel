let inputs = process.argv.slice(2);
let result = inputs.map(input => input[0])
                    .reduce((result, input) => result + input);
console.log(result);
