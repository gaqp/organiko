$.get("api/product", function (data) {
  data.map((dados) => {
    $('#cardHolder').append(
      `
      <div class="card">
        <img class="card-img-top" src="${dados.imgUrl}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${dados.title}</h5>
          <p class="card-text">${dados.description}</p>
          <button id="contactButton" onclick="scrollContactus()" class="btn btn-primary">Fale Conosco</button>
        </div>
      </div>`
    )
  })
})

function scrollContactus(e) {
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 500);

}
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset - 82
  }, 500);
});


$('a[href^="/contato"]').on('click', function (e) {
  e.preventDefault();
  if ($('form').css("display") === "none") {
    $('form').css("display", "block")
    $('#contactUs').css("display", 'none')
  } else {
    $('form').css("display", "none")
    $('#contactUs').css("display", 'flex')
  }
})
$('button#goBack').on('click', function (e) {
  e.preventDefault();
  if ($('form').css("display") === "none") {
    $('form').css("display", "block")
    $('#contactUs').css("display", 'none')
    $('#messageBox').css("display", 'none')

  } else {
    $('form').css("display", "none")
    $('#contactUs').css("display", 'flex')
    $('#messageBox').css("display", 'none')
  }
})
function showSuccess(e) {
  $('form').css("display", "none")
  $('#contactUs').css("display", 'none')
  $('#messageBox').css("display", 'flex')
}
$('form').on('submit', function (e) {
  e.preventDefault();

  let name = $("#nameInput").val()
  let email = $("#emailInput").val()
  let message = $("#messageInput").val();
  $.ajax({
    type: "POST",
    url: "/api/message",
    data: JSON.stringify({ name: name, email: email, message: message }),
    contentType: "application/json",
    dataType: 'json',
    success: showSuccess

  });
  console.log(name, email, message);

})
function euclidianModule(a, b) {
  let m = a % b;
  if (m < 0) {
    m = (b < 0) ? m - b : m + b;
  }
  return m;
}
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var data = new Date();
var nMes = data.getMonth();
const lastSixMonths = [months[euclidianModule((nMes - 5), 12)], months[euclidianModule((nMes - 4), 12)], months[euclidianModule((nMes - 3), 12)], months[euclidianModule((nMes - 2), 12)], months[euclidianModule((nMes - 1), 12)], months[(nMes) % 12]];
var ctx = document.getElementById('grafico').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: lastSixMonths,
    datasets: [{
      label: 'Investimento em Reais',
      data: [50, 70, 93, 97, 99, 110],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1
    }, {
      label: 'Faturamento em Reais',
      data: [70, 90, 99, 103, 110, 130],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',

      ],
      borderWidth: 1

    }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: 'R$'
        }
      }]
    }
  }
});