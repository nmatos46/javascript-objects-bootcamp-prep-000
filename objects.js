var playlist = {
  QueenBee: "Run the World (Girls)",
  Spice_Girls: "Wanna be"
}

function updatePlaylist(playlist1, artistName, song){
  return Object.assign({},playlist1,{[artistName]:[song]})
}
