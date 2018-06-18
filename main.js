$(document).ready(function() {

  $.getJSON('data.json', function(data){

      $.each(data, function(index, item){

          var htmlString = '<tr><td>' + item.name + '</td>' +
                           '<td>' + item.description + '</td>' +
                           '<td><a href="https://www.google.com/maps?q=' + item.location + '">Open In Google Mapspwd</a></td></tr>';

              $('table').append(htmlString);
      });
  });
});
