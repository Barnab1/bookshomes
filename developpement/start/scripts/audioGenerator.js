let audioContainer = document.getElementById('audioContainer');


/**BUSINESS */


/**
 * 
 * @returns entrepreneurs audio
 */
let generateAudioEntrepreneurs = () => {
    return boilerplateAudio(audioContainer,audioBusinessData,entrepreneur_categorie);
}
/**
 * @returns field entrepreneurs audio
 */
let fieldBusiness = (fieldString) => {
    
return field(audioBusinessData,fieldString,entrepreneur_categorie)
}



/**PROFESSION */
let generateAudioProfession = ()=>{
    return boilerplateAudio(audioContainer,audioProfessionData,profession_categorie);
}
let fieldProfession = (fieldString) => {
    
    return field(audioProfessionData,fieldString,profession_categorie)
    }

/**FAMILY */    

let generateAudioFamily = ()=> {
    return boilerplateAudio(audioContainer,audioFamilyData,family_categorie);
}

let fieldFamily = (fieldString) => {
    
    return field(audioFamilyData,fieldString,family_categorie)
}


/**
 * returns an audiobook based on a specific category
 * @return
 * 
 * I created my own hash: the num_catg variable is the six one in the parameter
 */
let field = (audioFieldData ,fieldString,category) => {
    let num_catg = fieldString [5];

    let arrayAnswer=[];

    audioFieldData.forEach((x)=>{
        (x.catg == num_catg) ? arrayAnswer.push(x): '';
    })

    return boilerplateAudio(audioContainer,arrayAnswer,category);
}

/**
 * 
 * @param {*objet which contains everything needed} objectToLoopThrough 
 * @returns html code 
 */

let boilerplateAudio = (htmlElementToInsertInto,objectToLoopThrough,category)=> {
    if(htmlElementToInsertInto !== undefined && objectToLoopThrough !==undefined){
        return (htmlElementToInsertInto.innerHTML = `

            <div class="sub-field-audio-book">
                        <button class="field" onclick=${category["category function"][0]}("698521juyuhj")>${category["fieldName"][0]}</button>
                        <button class="field" onclick=${category["category function"][0]}("658922hgytu5")>${category["fieldName"][1]}</button>
                        <button class="field" onclick=${category["category function"][0]}("456213899456")>${category["fieldName"][2]}</button>
            </div>
            `+ (objectToLoopThrough).map((x)=>{
    
            let {audio,desc,id,img, title} = x;
            return  ` <div class="audio_book">
                        <h3 class="title_audio">${title}:</h3>
                        <div class="image-and-content">
                                <img src="../images/${img}" class="book_image"  
                                alt="${title}" loading="lazy" width="100">
                            <div class="audio_description">
                                <audio src="../audio/${audio}" controls ></audio>
                                <p>${desc}</p>
                            </div>
                        </div>
                        <div class="add_icon">
                            <span class="add_audio" onclick=addToPlayList(${id})>+</span>
                        </div>
                    </div>`
        }).join(""));
    }else{
      return  audioContainer.innerHTML = `
            <div class="contentUnavailable">
                <p>Cher ami, je pense qu'il y a un petit problème, 
                mais je le corrigerai bien vite</p>
            </div>
        `
    }

   

    /***
 * END
 */
}


/***
 * FUNCTION INVOCATION SPACE
 */

generateAudioEntrepreneurs();