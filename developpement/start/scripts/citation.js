let citationBox = document.getElementById('citation_box');



let generateQuote = ()=> {
   return setInterval(()=>{
        let lengthOfCitations = citations.length;
        let number = Math.ceil(Math.random() * lengthOfCitations);
        let valueToInter = citations[number];
       
        citationBox.innerHTML =  `
                <p class="citation bold text_center">
                    ${valueToInter.citation}
                </p>
                <i class="auteur">${valueToInter.auteur}</i>
        `
    },5000)
};

generateQuote();
