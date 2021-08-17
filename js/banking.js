function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmount = parseFloat(input.value);
    //clear the input field
    input.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, newAmount) {
    const total = document.getElementById(totalFieldId);
    const previousAmount = parseFloat(total.innerText);
    const newTotal = previousAmount + newAmount;
    total.innerText = newTotal;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = parseFloat(balanceTotal.innerText);
    return previousBalanceAmount;
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = newAmount + previousBalanceAmount;
    } else {
        balanceTotal.innerText = previousBalanceAmount - newAmount;
    }

}

//handle deposit button handle
document.getElementById('deposit-button')
    .addEventListener('click', function() {

        //get input value
        const newDepositAmount = getInputValue('deposit-input');
        if (newDepositAmount > 0) {
            //get amount deposited
            updateTotalField('deposit-total', newDepositAmount);
            //update account balance
            updateBalance(newDepositAmount, true);
        }


    })

//handle withdraw button
document.getElementById('withdraw-button').addEventListener(
    'click',
    function() {

        const newWithdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
            //update withdraw value
            updateTotalField('withdraw-total', newWithdrawAmount);
            //update account balance
            updateBalance(newWithdrawAmount, false);
        } else if (newWithdrawAmount > currentBalance) {
            console.log('You can not withdraw more than you have in account');
        }
    }
)