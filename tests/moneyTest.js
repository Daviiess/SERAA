import { formatCurrency } from "../scripts/utils/money.js";
if(formatCurrency(2150) === '21.50'){
    console.log("Test passed");
}else {
    console.log('Test failed');
}
if(formatCurrency(0) === '0.00'){
    console.log('Passed')
}else{
     console.log('Failed')
}