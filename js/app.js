function calculate() {
    var montlyIncome = $('input#montlyIncome').val();
    var childNumber = $('select#childNumber').val();
    var healtInsurance = $('input#healtInsurance').val();
    var payInsure = $('select#payInsure').val();
    var error = false;
    var total;

    //validate montlyIncome
    if (montlyIncome == "" || montlyIncome == " ") {
        $('#err-montlyIncome').show(500);
        $('#err-montlyIncome').delay(2000);
        $('#err-montlyIncome').animate({
            height: 'toggle'
        }, 500, function () {
            // Animation complete.
        });
        error = true;
    }

    //validate childNumber
    if (childNumber == "" || childNumber == " ") {
        $('#err-childNumber').show(500);
        $('#err-childNumber').delay(2000);
        $('#err-childNumber').animate({
            height: 'toggle'
        }, 500, function () {
            // Animation complete.
        });
        error = true;
    }

    //validate healtInsurance
    if (healtInsurance == "" || healtInsurance == " ") {
        $('#err-healtInsurance').show(500);
        $('#err-healtInsurance').delay(2000);
        $('#err-healtInsurance').animate({
            height: 'toggle'
        }, 500, function () {
            // Animation complete.
        });
        error = true;
    }

    //validate payInsure
    if (payInsure == "" || payInsure == " ") {
        $('#err-payInsure').show(500);
        $('#err-payInsure').delay(2000);
        $('#err-payInsure').animate({
            height: 'toggle'
        }, 500, function () {
            // Animation complete.
        });
        error = true;
    }
    
    if (error == false) {
        montlyIncome =   parseInt(montlyIncome);
        childNumber =    parseInt(childNumber);
        healtInsurance = parseInt(healtInsurance);

        if (payInsure == "custodial") {
            total= healtInsurance+(montlyIncome*(20/100)*childNumber)
        }

        if (payInsure == "nonCustodial") {
            total= montlyIncome*(20/100)*childNumber
        }
        var child = "Under this scenario, your monthly child support payment would be between $"+total+" and $"+total;
        $('#calculationSucessful').text(child);
        $('#calculationSucessful').show(500);
        $('#calculationSucessful').delay(2000);
    }
}