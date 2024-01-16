//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// toast musik info
 // Fungsi untuk memunculkan div setelah delay 5 detik
 function showDiv() {
    var div = document.getElementById("tampil");
    div.classList.remove('hidden');
    div.classList.add('toast_active');
  }

//   //Text SLice 
//   var paragraf = document.getElementById('paragrafFFF');
//   var text = paragraf.innerText ;

//   if(text.length > 100) {
//     var teksPendek = teks.slice(0, 100)+ "...";
//     paragraf.innerText = teksPendek;
//   }
  
  // pop up
  window.onload = function() {
    // document.querySelector('.popup').style.display = 'block';
  };
    // Membuat elemen audio
        function playMusic() {
        const music_doc = document.getElementById('array').value;
        const obj = JSON.parse(music_doc);
        console.log(obj);
        var musikArray = obj;
        var songInfo = document.getElementById('song');
        // Mendapatkan referensi tombol play
        var playButton = document.getElementById('playB');
    
        // Mendefinisikan fungsi untuk memutar musik
        var randomIndex = Math.floor(Math.random() * musikArray.length);
        music_play();
        function music_play() {
        var randomSong = musikArray[randomIndex];
        var audio = new Audio(randomSong.music);
        audio.play();
        songInfo.textContent = randomSong.judul;
        console.log(randomSong.judul + " " + randomSong.music);
        audio.addEventListener('ended', nextSong);
        }
        // ganti lagu ketika lagu selesai
        var defaultMusic = randomIndex;
        function nextSong() {
        defaultMusic++;
        if(defaultMusic >= musikArray.length) {
            defaultMusic = 0;
        }
        var next = musikArray[defaultMusic];
        var audio = new Audio(next.music);
        audio.src = next.music;
        audio.play();
        songInfo.textContent = next.judul;
        audio.addEventListener('ended', nextSong);
        };
    }
    // fungsi nextSong
    
    // Menambahkan event listener ke tombol play
    // playButton.addEventListener('click', playMusic);
            document.getElementById('closeBtn').addEventListener
            ('click', function() {
                setTimeout(() => {
                    playMusic()
                }, 3000);
                setTimeout(showDiv, 5000);
                document.querySelector('.popup').style.display = 'none';
            });
        
    
// kontak konfigurasi

 function kontak() {
    const name_ct = document.querySelector('#name_contact').value;
    const email_ct = document.querySelector('#email_contact').value;
    const note_ct = document.querySelector('#note_contact').value;

    window.location.href(`mailto:hrdsdms765@gmail.com?subject=RIFALKOM PORTOFOLIO - ' + ${name_ct} + '&body=' + `)
 }

 // togle buat event
 function ketahui() {
    const text = document.querySelector('#content-event');

    text.classList.toggle('show-content');


 }