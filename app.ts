let radioBtn = document.getElementsByName('exp');
let yearsExp = document.getElementById('experice');
let workDetails = document.getElementById('workexp1');
let addPlus = document.getElementById('plus');
let deleteMinus = document.getElementById('minus');
let workDetails2 = document.getElementById('workexp2');
let workExpHeading = document.getElementById('workexp1head');
let addbachelors = document.getElementById('plusbachelors');
let bachelors = document.getElementById('bachelorsdiv');
let deletebachelors = document.getElementById('minusbachelors')


radioBtn.forEach(function (radio) {
    radio.addEventListener('change', function () {
        if (radio.value === 'experienced') {
            yearsExp.style.maxHeight = '100%';
            workDetails.style.maxHeight = '100%';
            yearsExp.style.display = 'block';
            workDetails.style.display = 'block'
            yearsExp.style.transition = '0.3s';
            workDetails.style.transition = '0.3s';
            addPlus.style.display = 'block';
        }
        else {
            yearsExp.style.maxHeight = 0;
            workDetails.style.maxHeight = 0;
            yearsExp.style.display = 'none';
            workDetails.style.display = 'none'
            addPlus.style.display = 'none';
        }
    });
});


function addwork(){
    addPlus.style.display = 'none';
    workDetails2.style.display = 'block';
    workDetails2.style.maxHeight = '100%';
    deleteMinus.style.display = 'block';
    workExpHeading?.innerText = 'Working experience 1';
}
function deletework(){
    workDetails2.style.display = 'none';
    workDetails2.style.maxHeight = 0;
    deleteMinus.style.display = 'none';
    addPlus.style.display = 'block';
    workExpHeading?.innerText = 'Working experience';
}
function addBachelors(){
    bachelors.style.display = 'block';
    bachelors.style.maxHeight = '100%';
    addbachelors.style.display = 'none';
    deletebachelors.style.display = 'block';
}
function deleteBachelors(){
    bachelors.style.display = 'none';
    bachelors.style.maxHeight = 0;
    addbachelors.style.display = 'block';
    deletebachelors.style.display = 'none';
}