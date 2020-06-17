
import './styles.css';

const tipPercentage = .20;

const btnCalculate = document.getElementById('btnCalculate');
const txtAmount = document.getElementById('txtAmount') as HTMLInputElement;
const spnBillAmount = document.getElementById('spnBillAmount') as HTMLSpanElement;
const spnTipPercentage = document.getElementById('spnTipPercentage') as HTMLSpanElement;
const spnTipAmount = document.getElementById('spnTipAmount') as HTMLSpanElement;
const spnTotal = document.getElementById('spnTotal') as HTMLSpanElement;

console.log({ btnCalculate, txtAmount });

btnCalculate.addEventListener('click', handleCalculate);

function handleCalculate() {
    const amount = txtAmount.valueAsNumber;
    spnBillAmount.innerText = amount.toString();
    spnTipPercentage.innerText = (tipPercentage * 100).toString() + '%';
    const tipAmount = amount * tipPercentage;
    spnTipAmount.innerText = tipAmount.toString();
    const total = amount + tipAmount;
    spnTotal.innerText = total.toString();
    console.log(amount);
    // txtAmount.value = '';
    txtAmount.select();
    txtAmount.focus();
}