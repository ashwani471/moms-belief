 document.querySelectorAll('.cost')[0].addEventListener('mouseover' ,targetBenefit);
// 
document.querySelectorAll('.cost')[0].addEventListener('mouseout' ,targetBenefitRemove);

let benefits = document.getElementById('benefits');
console.log(benefits);

// cost.addEventListener("mouseove" , targetBenefit);

function targetBenefit(e){
  benefits.style.border=`2px solid yellow`;
}

function targetBenefitRemove(e){
    benefits.style.border='';
}