var radioBtn = document.getElementsByName('exp');
var yearsExp = document.getElementById('experice');
var workDetails = document.getElementById('workexp1');
var addPlus = document.getElementById('plus');
var deleteMinus = document.getElementById('minus');
var workDetails2 = document.getElementById('workexp2');
var workExpHeading = document.getElementById('workexp1head');
var addbachelors = document.getElementById('plusbachelors');
var bachelors = document.getElementById('bachelorsdiv');
var deletebachelors = document.getElementById('minusbachelors');
radioBtn.forEach(function (radio) {
    radio.addEventListener('change', function () {
        if (radio.value === 'experienced') {
            yearsExp.style.maxHeight = '100%';
            workDetails.style.maxHeight = '100%';
            yearsExp.style.display = 'block';
            workDetails.style.display = 'block';
            yearsExp.style.transition = '0.3s';
            workDetails.style.transition = '0.3s';
            addPlus.style.display = 'block';
        }
        else {
            yearsExp.style.maxHeight = 0;
            workDetails.style.maxHeight = 0;
            yearsExp.style.display = 'none';
            workDetails.style.display = 'none';
            addPlus.style.display = 'none';
        }
    });
});
function addwork() {
    addPlus.style.display = 'none';
    workDetails2.style.display = 'block';
    workDetails2.style.maxHeight = '100%';
    deleteMinus.style.display = 'block';
    workExpHeading === null || workExpHeading === void 0 ? void 0 : workExpHeading.innerText = 'Working experience 1';
}
function deletework() {
    workDetails2.style.display = 'none';
    workDetails2.style.maxHeight = 0;
    deleteMinus.style.display = 'none';
    addPlus.style.display = 'block';
    workExpHeading === null || workExpHeading === void 0 ? void 0 : workExpHeading.innerText = 'Working experience';
}
function addBachelors() {
    bachelors.style.display = 'block';
    bachelors.style.maxHeight = '100%';
    addbachelors.style.display = 'none';
    deletebachelors.style.display = 'block';
}
function deleteBachelors() {
    bachelors.style.display = 'none';
    bachelors.style.maxHeight = 0;
    addbachelors.style.display = 'block';
    deletebachelors.style.display = 'none';
}
