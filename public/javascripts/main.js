$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 82
  }, 500);
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar')
  navbar.classList[window.scrollY > 50 ? 'add' : 'remove']('hidden')
})

$.get("api/product", function (data) {
  data.map((dados) => {
    $('#cardHolder').append(
      `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${dados.imgUrl}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${dados.title}</h5>
          <p class="card-text">${dados.description}</p>
          <a href="#" class="btn btn-primary">Saiba Mais</a>
        </div>
      </div>`
    );
  })
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});