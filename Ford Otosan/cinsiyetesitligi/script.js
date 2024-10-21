
document.getElementById('submit').addEventListener('click', function() {
    let score = 0;
    let allAnswered = true; 


    for (let i = 1; i <= 10; i++) {
        let radios = document.getElementsByName('q' + i);
        let questionAnswered = false;
        
        for (let radio of radios) {
            if (radio.checked) {
                questionAnswered = true;
                if (radio.value === '1') {
                    score++;
                }
                break; 
            }
        }

        if (!questionAnswered) {
            allAnswered = false; 
        }
    }

    if (!allAnswered) {
        alert("Lütfen Tüm Soruları Yanıtlayınız!");
        return; 
    }

   
    let resultText;
    if (score >= 8) {
        resultText = "Tebrikler! Toplumsal cinsiyet eşitliğine dair bilinçlisiniz.";
    } else if (score >= 5) {
        resultText = "İyi bir başlangıç yaptınız ama biraz daha farkındalık gerekiyor.";
    } else {
        resultText = "Eşitlik konusunda farkındalığınızı artırmanız gerekiyor.";
    }


    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = resultText; 
        resultDiv.style.display = 'block';  
    } 
});
