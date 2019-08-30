let URLactual = window.location.href






switch (URLactual) {
    case 'http://127.0.0.1:5500/candidato_pres.html':
        document.getElementById('fotoCandidatoP').setAttribute('src', sessionStorage.getItem('imageSrc'))
        switch(sessionStorage.getItem('presidente')){
            case '1':
                    document.getElementById('nombreP').innerText = 'LUIS ABINADER';
                    break;
            case '2':
                    document.getElementById('nombreP').innerText = 'CANDIDATO 2';
                    break;
            case '3':
                    document.getElementById('nombreP').innerText = 'CANDIDATO 3';
                    break;
            case '4': 
                    document.getElementById('nombreP').innerText = 'CANDIDATO 4';
                    break;
            case '0':
                    document.getElementById('nombreP').innerText = 'NINGUNO;
                    break;
            default:
                    window.location.href = 'http://127.0.0.1:5500/index.html'
        }
        
        break;
    
    case 'http://127.0.0.1:5500/presidente.html':

            let candidatoP1 = document.getElementById('candidatoP1')
            let candidatoP2 = document.getElementById('candidatoP2')
            let candidatoP3 = document.getElementById('candidatoP3')
            let candidatoP4 = document.getElementById('candidatoP4')
            let candidatoP0 = document.getElementById('candidatoP0')

            candidatoP1.addEventListener('click', function(){
                sessionStorage.setItem('presidente', 1)
                sessionStorage.setItem('imageSrc', 'images/candidatos/abinader.png')
                window.location.href = 'candidato_pres.html'
            })
            
            candidatoP2.addEventListener('click', function(){
                sessionStorage.setItem('presidente', 2)
                sessionStorage.setItem('imageSrc', 'images/candidatos/Candidato-M.PNG')
                window.location.href = 'candidato_pres.html'
            })
            
            candidatoP3.addEventListener('click', function(){
                sessionStorage.setItem('presidente', 3)
                sessionStorage.setItem('imageSrc', 'images/candidatos/Candidato-M.PNG')
                window.location.href = 'candidato_pres.html'
            })
            
            candidatoP4.addEventListener('click', function(){
                sessionStorage.setItem('presidente', 4)
                sessionStorage.setItem('imageSrc', 'images/candidatos/Candidato-M.PNG')
                window.location.href = 'candidato_pres.html'
            })
            
            candidatoP0.addEventListener('click', function(){
                sessionStorage.setItem('presidente', 0)
                sessionStorage.setItem('imageSrc', 'images/candidatos/ninguno.png')
                window.location.href = 'candidato_pres.html'
            })

    
}