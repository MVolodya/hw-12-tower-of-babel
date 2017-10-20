

let arg1 = process.argv[2];
let arg2 = process.argv[3];

/*
    //TASK 4
    import {PI, sqrt, square} from './modules_default_export_math';

    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));

*/


    //TASK 5
    import Math from './modules_default_export';

    console.log(Math.PI);
    console.log(Math.sqrt(+arg1));
    console.log(Math.square(+arg2));
