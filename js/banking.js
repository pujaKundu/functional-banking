function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmount = parseFloat(depositInput.value);
    //clear the deposit input field
    depositInput.value = '';
    return depositAmount;
}


//handle deposit button handle
document.getElementById('deposit-button')
    .addEventListener('click', function() {
        //get amount deposited

        const newDepositAmount = getInputValue('deposit-input');


        const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmount = parseFloat(depositTotal.innerText);
        const newDepositTotal = previousDepositAmount + newDepositAmount;
        depositTotal.innerText = newDepositTotal;
        // console.log(typeof(newDepositAmount));
        // console.log(typeof(newDepositTotal))
        // console.log(typeof(previousDepositAmount))
        //clear the deposit input field


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
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
        const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
        withdrawTotal.innerText = newWithdrawTotal;


        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceAmount = parseFloat(balanceTotal.innerText);

        const newBalanceAfterWithdraw = previousBalanceAmount - newWithdrawTotal;
        balanceTotal.innerText = newBalanceAfterWithdraw;
        console.log(newBalanceAfterWithdraw)
    }
)