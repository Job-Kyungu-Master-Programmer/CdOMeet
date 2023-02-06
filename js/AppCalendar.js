
//This is File allows to open and close Calendars only.

let MeetingbButtonOpenCalendar = document.querySelector('.dashboard__form__bottom__dateInput');
let MeetingCalendar            = document.querySelector('.MeetingCalendar');
let IconBtnOpenMeetingCalendar = document.querySelector('.MeetingIconOpenCalendar');

IconBtnOpenMeetingCalendar.addEventListener('click', () => {
    MeetingCalendar.classList.toggle('OPenMeetingCalendar');
    IconBtnOpenMeetingCalendar.classList.toggle('IconCalendarChangeBackground');
});
