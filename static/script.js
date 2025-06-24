let noClickCount = 0;
const questions = [
    "Will you be my bestest friend forever, mera meenamma?",
    "Nejama thaan solriyaa maadehhhh! Nejama naa frnd ah irukka venama?",
    "Adi paavi kal nenja kaaariii...innoru vaati yosi!",
    "Ahnnnnn...Please di apdilaam solladha...frnds ah ilaya?",
    "Ulla yes thana solludheyy...unmai ah sollu diii!",
    "Manda...Yosi di...Naa unakku frnd ah venaamaaawwww!",
    "Naa vidrathaa ilaa...unakku frnd ah venaamaa?",
    "Aiyo...enna paathaa unakku epdi theridhu naayehh...Naa unakku frnd ah venaamaa?",
    "Rombha over ah pogudhu idhhee...ippove yes sollidehh!",
    "Illa...Ipdeh keta seri varaadhu...Un kazhuthu la ipo kaththi vechuruken...You have no choice now!",
];

function handleYes() {
    document.getElementById('questionSection').classList.add('hidden');
    document.getElementById('finalMessage').classList.remove('hidden');
}

function handleNo() {
    noClickCount++;
    
    if (noClickCount >= 10) {
        document.getElementById('noButton').style.display = 'none';
        document.getElementById('questionText').textContent = "Unakku option eh ledhu maa...Vaazhkai full ah inga thaan maatikitaaaawwwwwwww";
        return;
    }
    
    if (noClickCount < questions.length) {
        document.getElementById('questionText').textContent = questions[noClickCount];
    }
    
    // Fun animation for No button
    const noButton = document.getElementById('noButton');
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 40 - 20;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    setTimeout(() => {
        noButton.style.transform = 'translate(0, 0)';
    }, 600);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});