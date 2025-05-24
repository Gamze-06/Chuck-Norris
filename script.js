async function getjoke() {
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        document.getElementById("joke").textContent = data.value;
    } catch(error) {
        document.getElementById("joke").textContent = "Şaka alınırken bir hata oluştu";
    }
    
}

function translateJoke(joke) {
  const url = `https://translate.google.com/?sl=en&tl=tr&text=${encodeURIComponent(joke)}&op=translate`;
  window.open(url, '_blank', 'noopener');
}

document.getElementById("yenisakaBtn").addEventListener("click",getjoke);

document.getElementById('translateBtn').addEventListener('click', () => {
  const joke = document.getElementById('joke').textContent;
  translateJoke(joke);
});

window.onload = getjoke;