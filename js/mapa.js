var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Estilo do mapa (pode ser alterado)
    center: [-46.935675, -22.442398], // Coordenadas de latitude e longitude
    zoom: 15 // Nível de zoom inicial
  
  });

  var el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage = 'url(NOME_DO_ARQUIVO_DE_IMAGEM)';
el.style.width = '50px';
el.style.height = '50px';

var imageUrl = 'https://images.app.goo.gl/FK3Cs8MBzu8fbfR48'; // URL da imagem hospedada

var marker = new mapboxgl.Marker(el)
  .setLngLat([-46.935675, -22.442398])
  .addTo(map);

marker.getElement().addEventListener('click', function() {
  var imagem = document.createElement('img');
  imagem.src = imageUrl; // Usando a URL da imagem hospedada
  document.body.appendChild(imagem);
});
  
  
  // Defina a URL do estilo personalizado do Mapbox
  var mapboxStyleUrl = 'https://api.mapbox.com/styles/v1/SEU_USUÁRIO/SEU_ESTILO/mapbox-gl-style.json?access_token=SEU_TOKEN_DE_ACESSO';
  
  // Adicione o estilo personalizado do Mapbox ao mapa do Google Maps
  map.setOptions({styles: [{ "stylers": [{ "mapboxMapId": mapboxStyleUrl }] }]});