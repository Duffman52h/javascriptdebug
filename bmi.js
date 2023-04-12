document.getElementById("calcBMI").adEventListener('click',function(){doCalcBMI()});

function doCalcBMI(){
    let theWeight = document.getElementById("myPounds").value;
    let theHeight = document.getElementById("myHeight").value;
    let myBMI = (theWeight / (theHeight * theHeight)) * 730;
    myBMI = myBMI.toFixed(3);
    let theString = "Your body mass index (BMI) is: " + myBMI;
    document.getElementById("bmiResult").INNERhtml = theString;
}

function myOutput(getBMI){
    let theString = "Your body mass index (BMI) is: ";
    return theString;
}

document.getElementById("calcBMI").adEventListener('click',function(){doCalcBMI()});

document.GetElementById("test").INNERhtml = "test";
