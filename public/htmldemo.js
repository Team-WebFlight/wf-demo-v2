var client = new WebTorrent();

client.add('magnet:?xt=urn:btih:70f833246b9ccab974af5c7c525682220e98f3cd&dn=01.jpg&tr=udp://exodus.desync.com:6969&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.internetwarriors.net:1337&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://tracker.openbittorrent.com:80&tr=wss://tracker.btorrent.xyz&tr=wss://tracker.fastcast.nz&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.webtorrent.io', function(torrent) {
  torrent.files.forEach(function(file, index) {
    file.getBlobURL(function(err, url) {
      if (err) console.log(err);

      var elementsArray = [].slice.call(document.getElementsByClassName('70f833246b9ccab974af5c7c525682220e98f3cd' + index));

      elementsArray.forEach(function(element) {
        element.src = url;
      });
    });
  });
});