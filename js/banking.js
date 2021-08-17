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

//handle deposit button handle
document.getElementById('deposit-button')
    .addEventListener('click', function() {

        //get input value
        const newDepositAmount = getInputValue('deposit-input');

        //get amount deposited
        updateTotalField('deposit-total', newDepositAmount);

        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceAmount = parseFloat(balanceTotal.innerText);

        const newBalanceTotal = newDepositTotal + previousBalanceAmount;
        balanceTotal.innerText = newBalanceTotal;

    })

//handle withdraw button
document.getElementById('withdraw-button').addEventListener(
    'click',
    function() {

        const newWithdrawAmount = getInputValue('withdraw-input')
            //update withdraw value
        updateTotalField('withdraw-total', newWithdrawAmount);


        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceAmount = parseFloat(balanceTotal.innerText);

        const newBalanceAfterWithdraw = previousBalanceAmount - newWithdrawTotal;
        balanceTotal.innerText = newBalanceAfterWithdraw;
        console.log(newBalanceAfterWithdraw)
    }
)