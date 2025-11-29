//liczenie delty - by maorpl 2025
//po co mi takie coś? nwm

let calcButton = document.querySelector("#mainButton1");
let resetButton = document.querySelector("#mainButton2");
let resultBox = document.querySelector(".result");
let resultOfX = document.querySelector("#x-result");



function delta(x,y,z)
{
    let calcDelta = y**2 - 4 * x * z;
    if (calcDelta==0)
    {
        let oneZero = -y/2*x;
        return [1,oneZero];
    }

    if (calcDelta>0)
    {
        sqrtDelta = Math.sqrt(calcDelta);
        let firstZero = (-y+sqrtDelta)/2*x;
        let secondZero = (-y-sqrtDelta)/2*x;

        if (Number.isInteger(firstZero || secondZero) != true)
            if (y==0)
            {
                return [2,`(√${calcDelta})/${2*x}`,`(-√${calcDelta})/${2*x}`];
            }
            else
            {
                return [2,`(${y}-√${calcDelta})/${2*x}`,`(${y}+√${calcDelta})/${2*x}`];
            }
        else
        {
            return [2,firstZero,secondZero];
        }


    }

    if (calcDelta<0) //brakuje implementacji liczb zespolonych
    {
        /*calcDelta *= -1;
        sqrtDelta = Math.sqrt(calcDelta);
        let firstZero = (-y+sqrtDelta)/2*x;
        let secondZero = (-y-sqrtDelta)/2*x;

        if (Number.isInteger(firstZero || secondZero) != true)
            if (y==0)
            {
                return [2,`(√${calcDelta})/${2*x}`,`(-√${calcDelta})/${2*x}`];
            }
            else
            {
                return [2,`(${y}-√${calcDelta})/${2*x}`,`(${y}+√${calcDelta})/${2*x}`];
            }
        else
        {
            return [2,firstZero,secondZero];
        }*/
        return [-1]
    }
}

function deltaOnClick()
{
    let a1 = document.getElementById("a");
    let b1 = document.getElementById("b");
    let c1 = document.getElementById("c");
    let eqVar1 = Number(a1.value);
    let eqVar2 = Number(b1.value);
    let eqVar3 = Number(c1.value);
    let result = delta(eqVar1,eqVar2,eqVar3);
    console.log(`${eqVar1}, ${eqVar2}, ${eqVar3}`);

    if ((delta(eqVar1,eqVar2,eqVar3))[0] == 1 || -1 || 2)
    {
        resultBox.className = "result show";
    }

    switch(result[0])
    {
        case -1:
            {
                resultOfX.style.fontSize = "40px";
                resultOfX.textContent = "Liczby zespolone nie zostały \njeszcze zaimplementowane...";
                break;
            }
        case 1:
            {
                resultOfX.textContent = `x = ${result[1]}`;
                break;
            }
        case 2:
            {
                resultOfX.setAttribute('style', 'white-space: pre;'); //dzięki nelek ze stockoverflow!!!
                resultOfX.textContent = `x = ${result[1]}\n`;
                resultOfX.textContent += `x = ${result[2]}`;
                break;
            }
    }
}

function resetOnClick()
{
    let a2 = document.getElementById("a");
    let b2 = document.getElementById("b");
    let c2 = document.getElementById("c");
    a2.value = "";
    b2.value = "";
    c2.value = "";
    resultBox.className = "result"
}


calcButton.onclick = deltaOnClick;
resetButton.onclick = resetOnClick;