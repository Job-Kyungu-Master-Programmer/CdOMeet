



// OutPut  

let OutPut = document.querySelector('click' , () => {
     document.querySelector('.QuickMeet').style.display = 'none';
     console.log(OutPut);
})





//Open And Close TableMenu 

// let OpenMenuT = document.querySelector('.table__menu');
// let ButtonOpenMenu = document.querySelectorAll('.table__child__menu-btn');
//     ButtonOpenMenu.forEach(element => {
//         element.addEventListener('click' , () => {
//             OpenMenuT.classList.toggle('OpenTableMenu');
//         })
//     });



// Menu For Open Table Menu In Meeting.html and Record.html
let BtnS1     = document.querySelector('#BtnMenu-s1');
let MenuTabS1 = document.querySelector('#MenuTabS-1');

BtnS1.addEventListener('click', () => {
     MenuTabS1.classList.toggle('OpenTableMenu');
});

let BtnS2      = document.querySelector('#BtnMenu-s2');
let MenuTabS2 = document.querySelector('#MenuTabS-2');

BtnS2.addEventListener('click', () => {
     MenuTabS2.classList.toggle('OpenTableMenu');
});

let BtnS3     = document.querySelector('#BtnMenu-s3');
let MenuTabS3 = document.querySelector('#MenuTabS-3');

BtnS3.addEventListener('click', () => {
     MenuTabS3.classList.toggle('OpenTableMenu');
});

let BtnS4     = document.querySelector('#BtnMenu-s4');
let MenuTabS4 = document.querySelector('#MenuTabS-4');

BtnS4.addEventListener('click', () => {
     MenuTabS4.classList.toggle('OpenTableMenu');
});

let BtnS5     = document.querySelector('#BtnMenu-s5');
let MenuTabS5 = document.querySelector('#MenuTabS-5');

BtnS5.addEventListener('click', () => {
     MenuTabS5.classList.toggle('OpenTableMenu');
});

let BtnS6     = document.querySelector('#BtnMenu-s6');
let MenuTabS6 = document.querySelector('#MenuTabS-6');

BtnS6.addEventListener('click', () => {
     MenuTabS6.classList.toggle('OpenTableMenu');
});

let BtnS7     = document.querySelector('#BtnMenu-s7');
let MenuTabS7 = document.querySelector('#MenuTabS-7');

BtnS7.addEventListener('click', () => {
     MenuTabS7.classList.toggle('OpenTableMenu');
});





// Open ad Closed Form News Meeting 

let NewMeet = document.querySelector('.NewsFormMeet');
let BtnOpenMeet = document.querySelector('.dashboard__header__last-btn');
let BtnClosed   = document.querySelector('.NewsFormMeet__times');
NewMeet.style.display = 'none';
BtnOpenMeet.addEventListener('click', () => {
    document.querySelector('.NewsFormMeet').style.display = 'flex';
});
BtnClosed.addEventListener('click' , () => {
    document.querySelector('.NewsFormMeet').style.display = 'none';
});

//Open AND Close QuickMeet  

let ButtonOpenQuickMeet = document.querySelector('.dashboard__button__first');
let QuickMeet            = document.querySelector('.QuickMeet');
let CloseQuickMeet      = document.querySelector('.QuickMeet__times');


QuickMeet.style.display = 'none';
ButtonOpenQuickMeet.addEventListener('click', () => {
    document.querySelector('.QuickMeet').style.display = 'flex';
});
CloseQuickMeet.addEventListener('click' , () => {
    document.querySelector('.QuickMeet').style.display = 'none';
    document.querySelector('.QuickMeet__response-backend').style.opacity = '0';
});


// Reply BackEnd after customer's copy
let QuickBtnCopy  = document.querySelector('.QuickMeet__span-bg');
let QuickResponseCopy = document.querySelector('.QuickMeet__response-backend');

QuickBtnCopy.addEventListener('click', () => {
    document.querySelector('.QuickMeet__response-backend').style.opacity = '1';
});


//Verification Of the Email  
function validation() {
  let form = document.querySelector(".NewsFormMeet");
  let email = document.querySelector('.news').value;

  let Text = document.querySelector('.NewsFormMeet__response-backend');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
    }
}



// Open and Close Calendar In POP
let ButtonPopCalendar  = document.querySelector('.NewsFormMeet__span-before');
let PopCalendar  = document.querySelector('.PopUpMeetingCalendar');

ButtonPopCalendar.addEventListener('click', () => {
    PopCalendar.classList.toggle('PopCalendarToggle');
    ButtonPopCalendar.classList.toggle('PopBtnBackground');
});




//Open and Close Calendar in File Record.html
let RecordBtnCalendar          = document.querySelector('.btnCalendar');
let RecordCalendar             = document.querySelector('.RecordCalendar');

RecordBtnCalendar.addEventListener('click', () => {
    RecordCalendar.classList.toggle('RecordOpenCalendar');
    RecordBtnCalendar.classList.toggle('btnCalendarToggle');
})
