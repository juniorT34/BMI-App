const BMIData = [
    {
        name: "thinness", 
        color: "midnightblue", 
        range: [0, 18.5]
    },
    {
        name: "Good Health",
        color: "green",
        range: [18.5, 25]
    },
    {
        name: "Overweight",
        color: "lightcoral",
        range: [25, 30]
    },
    {
        name: "Moderate obesity",
        color: "orange",
        range: [30, 35]
    },
    {
        name: "Severe obesity",
        color: "crimson",
        range: [35, 40]
    },
    {
        name: "Morbid obesity",
        color: "purple",
        range: 40
    }
]
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const button = document.querySelector('#button');
const result = document.querySelector('#result');
const stat = document.querySelector('#state');


let heightValue , weightValue;

button.addEventListener('click', (e) =>{
    e.preventDefault()
    heightValue = height.value;
    weightValue = weight.value;
    console.log(heightValue)
    console.log(weightValue);

    const IMC = (weightValue / Math.pow(heightValue / 100,2)).toFixed(1);
    
    if(!heightValue || !weightValue) {
        result.textContent = "wops"
        stat.textContent = "Please fill all fields";
    }else if(heightValue <= 0 || weightValue <= 0){
        result.textContent = "wops"
        stat.textContent = "Fields cannot be zero or negative";
    }else{

        if(IMC >= BMIData[0].range[0] && IMC < BMIData[0].range[1]){
            result.style.color = BMIData[0].color;
            result.textContent = IMC;
            stat.textContent = "Result : " + BMIData[0].name;
        }
        if(IMC >= BMIData[1].range[0] && IMC < BMIData[1].range[1]){
            result.style.color = BMIData[1].color;
            result.textContent = IMC;
            stat.textContent = "Result : " + BMIData[1].name;
        }
        if(IMC >= BMIData[2].range[0] && IMC < BMIData[2].range[1]){
            result.style.color = BMIData[2].color;
            result.textContent = IMC;
            stat.textContent = "Result : " + BMIData[2].name;
        }
        if(IMC >= BMIData[3].range[0] && IMC < BMIData[3].range[1]){
            result.style.color = BMIData[3].color;
            result.textContent = IMC;
            stat.textContent = "Result : " + BMIData[3].name;
        }
        if(IMC >= BMIData[4].range[0] && IMC < BMIData[4].range[1]){
            result.style.color = BMIData[4].color;
            result.textContent = IMC;
            stat.textContent = "Result : " + BMIData[4].name;
        }
        if(IMC >= BMIData[5].range){
            result.style.color = BMIData[5].color;
            result.textContent = IMC;
            stat.textContent = "Result : " + BMIData[5].name;
        }
    }
})
// console.log(BMIData[5].range)

// mass / taille * taille