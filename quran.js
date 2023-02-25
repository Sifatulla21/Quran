
const loadQuran = () => {
    fetch('https://api.alquran.cloud/v1/quran/en.asad')
    .then(res => res.json())
    .then(data => showSurah(data));

}

const showSurah = (surah) =>{

    // console.log(surah.data.edition.identifier);
    // Select Surah Name
    surah.data.surahs.forEach(sura => {
        const selectSurah = document.getElementById('selectSurah');
        const li = document.createElement('li');
        li.innerHTML = `
        <button  class="dropdown-item" onclick="loadSura(${sura.number})"><span>${sura.number}</span><span>${sura.englishName}</span></button>
        `;
        selectSurah.appendChild(li);
    });
    // Show Surah Name
    // Show Ayahs
    
}
const loadSura = (suraId) =>{
    document.getElementById('languageBan').addEventListener('click',function(){
        const banLanguageValue = document.getElementById('languageBan').innerText;
        if(banLanguageValue == 'Bangla'){
            let url = `https://api.alquran.cloud/v1/surah/${suraId}/bn.bengali`;
            fetch(url)
            .then(res => res.json())
            .then(data =>appendSurahName(data.data));
        }});
    document.getElementById('languageEng').addEventListener('click',function(){
        const engLanguageValue = document.getElementById('languageEng').innerText;
        if(engLanguageValue == 'English'){
            let url = `https://api.alquran.cloud/v1/surah/${suraId}/en.asad`;
            fetch(url)
            .then(res => res.json())
            .then(data =>appendSurahName(data.data));
        }});
    document.getElementById('languageAra').addEventListener('click',function(){
        const araLanguageValue = document.getElementById('languageAra').innerText;
        if(araLanguageValue == 'Arabic'){
            let url = `https://api.alquran.cloud/v1/surah/${suraId}/ar.asad`;
            fetch(url)
            .then(res => res.json())
            .then(data =>appendSurahName(data.data));
        }

    });
}
const appendSurahName = surahName => {
    const showSurahName = document.getElementById('showSurahName');
    showSurahName.innerText = " ";
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${surahName.englishName}</h1>
    `
    showSurahName.appendChild(div);
    const showSurah = document.getElementById('showSurah');
    showSurah.innerText = " ";
    surahName.ayahs.forEach(ayah => {
        const div = document.createElement('div');
    
    div.innerHTML = `
        <p id="showSurahBg"><span id="surahNumber">${ayah.number}</span> <span id="surahAyah">${ayah.text}</span></p>
    `
    showSurah.appendChild(div);
    });
}
loadQuran();
