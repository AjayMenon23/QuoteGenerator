
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const author = document.getElementById('author')
const twitterbutton = document.getElementById('twitter')
const newQuote = document.getElementById('new-quote')

//Get quote from API
async function getQuote(){

    const proxyurl='https://young-hamlet-12787.herokuapp.com/'
    const api ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        let response= await fetch(proxyurl+api);
        let data = await response.json();
        if(data.quoteAuthor === ''){
            author.innerText = 'Unknown';
        }
        else{
            
        author.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
        
        }
    }
    catch(error){
        getQuote();
    }

}

function twitterButtonAction(){
    const quote= quoteText.innerText;
    const authorInfo = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${authorInfo}`;
    window.open(twitterUrl, '_blank');
}


//Event listeners

newQuote.addEventListener('click',getQuote);
twitterbutton.addEventListener('click',twitterButtonAction);
getQuote();