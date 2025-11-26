//liczenie delty - by maorpl 2025
//po co mi takie coś? nwm

let calcButton = document.querySelector("#mainButton1");
let resetButton = document.querySelector("#mainButton2");

function delta(x,y,z)
{
    let calcDelta = y**2 - 4 * x * z;
    if (calcDelta==0)
    {
        let oneZero = -y/2*x;
        console.log(`Funkcja ma miejsce zerowe w x = ${oneZero}`)
        return Number(oneZero);
    }

    if (calcDelta>0)
    {
        calcDelta = Math.sqrt(calcDelta);
        let firstZero = (-y+calcDelta)/2*x;
        let secondZero = (-y-calcDelta)/2*x;
        console.log(`Funkcja ma miejsca zerowe w x = ${firstZero} i x = ${secondZero}`);
        return [firstZero,secondZero];
    }

    if (calcDelta<0) //brakuje implementacji liczb zespolonych
    {
        console.log("później zaimplementuje liczby zespolone");
        return 0;
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
    delta(eqVar1,eqVar2,eqVar3);
    console.log(`${eqVar1}, ${eqVar2}, ${eqVar3}`);
}

function resetOnClick()
{
    let a2 = document.getElementById("a");
    let b2 = document.getElementById("b");
    let c2 = document.getElementById("c");
    a2.value = "";
    b2.value = "";
    c2.value = "";
}

calcButton.onclick = deltaOnClick;
resetButton.onclick = resetOnClick;