function playlistIterator(songs) {
    let index = 0;
    return {
      next: function() {
        if (index < songs.length) {
          return { value: songs[index++] };
        } else {
          return { done: true };
        }
      }
    };
  }
  
  let playlist = ["Song 1", "Song 2", "Song 3"];
  let player = playlistIterator(playlist);
  
  for (let p of player) {
    console.log(p);
  }