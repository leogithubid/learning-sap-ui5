sap.ui.define([
"sap/ui/core/format/NumberFormat"
], function(numberFormat) {
    //return two formatter utility functions that can be used in the controller
    return {
        //format the salary amount based on currency
        //this requires formatter dependency - so load it in the beginning  
        formatSalary:function(salary,currency){
            var oCurrencyFormat = numberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(salary,currency);
        },
        //convert the input values to upper case
        convertUpperCase:function(inputValue){
            if(inputValue){
                return inputValue.toUpperCase();
            }
        }
    }
    
});