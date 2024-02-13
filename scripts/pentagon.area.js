
function calculatePentagonArea(){
    const PentagonParameterInput = document.getElementById('pentagon-parameter');
    const PentagonParameterInputText = PentagonParameterInput.value;
    const parameter = parseFloat(PentagonParameterInputText);
    console.log(parameter)


    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const apothem = parseFloat(pentagonApothemText);
    console.log(apothem);

    
    const area = 0.5 * parameter * apothem;
    console.log(area);

    const pentagonApothemAreaSpan = document.getElementById('pentagon-area');
    pentagonApothemAreaSpan.innerText = area;
}