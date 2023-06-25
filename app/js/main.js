//toggle mobile menu
$('.toggle-mobile-menu').click(function () {
  $(this).toggleClass('active');
  $('.header-bottom').toggleClass('show');
  $('body').toggleClass('scroll-locked')
})

//slide toggle footer columns
$('.footer-column-title').click(function () {
  $(this).toggleClass('active');
  $(this).next('.footer-column-list').slideToggle(400)
})

//date picker
new AirDatepicker('#dateFrom');
new AirDatepicker('#dateTo');

//diagram
const data = {
  datasets: [{
    data: [6, 3, 18],
    backgroundColor: [
      '#DF0000',
      '#E6F1FB',
      '#98BE05'
    ],
    hoverOffset: 4
  }]
};
const ctx = document.getElementById('myChart')
new Chart(ctx, {
  type: 'doughnut',
  data: data,
});


