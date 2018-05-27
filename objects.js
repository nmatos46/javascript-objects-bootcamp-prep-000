var playlist = {
  'Slowdive' : 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

function updatePlaylist(playlist1, artistName, song){
  playlist1[artistName]=song
  return Object.assign({},playlist1,{[artistName]:[song]})
}
