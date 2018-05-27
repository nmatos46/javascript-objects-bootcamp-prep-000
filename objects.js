var playlist = {
  'Queen Bee' : 'Run the World (Girls)',
  'Spice Girls': 'Wanna Be'
}

function updatePlaylist(playlist1, artistName, song){
  playlist1[artistName]=song
  return Object.assign({},playlist1,{[artistName]:[song]})
}

function removeFromPlaylist(playlist1){
  return
}
