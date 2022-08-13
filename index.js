const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

var logo = document.getElementById('vvnillz1');
var igIcon = document.getElementById('instaIcon');
var ytIcon = document.getElementById('youtuIcon');
var spotiIcon = document.getElementById('spotiIcon');
var emotes = document.getElementById('emoteIcon');

function onLoad()
{
    var outerStyle = document.createElement("style");
    if (detectDeviceType() == "Desktop") {
        outerStyle.innerHTML = `.outer { 
            width: 100%; height: 97.9vh; display: flex; justify-content: center; align-items: center;
        }`;
    }
    else {
        outerStyle.innerHTML = `.outer { 
            width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center;
        }`;
    }
    document.head.appendChild(outerStyle);

    if (detectDeviceType() == "Desktop")
    {
        logo.style.cssText = 'max-width: 60%; display: block; margin-left: auto; margin-right: auto; margin-bottom: 60px';
        logo.classList.add('main');
    }
    else
    {
        logo.style.cssText = 'max-width: 80%; display: block; margin-left: auto; margin-right: auto;';
    }

    if (detectDeviceType() == "Desktop")
    {
    }
    else
    {
    }
}

function openLink(link)
{
    window.open("https://" + link, "_blank").focus();
}

var the = document.getElementById('userInput');
var cooldown = false;

the.addEventListener('keydown', (key) => {
    
    
    if(key.key != ""){

    }
    
    if(key.key == "Enter")
    {
        key.preventDefault();
        if(!cooldown)
        {

            the.classList.add('searchT');

            the.style.color = "#BAFF89";
            the.style.borderColor = "#BAFF89";
            var jaja = setTimeout(() => {
                the.style.color = "white";
                the.style.borderColor = "white";
                cooldown = true;

                the.classList.remove('searchT');

                clearTimeout(jaja);
            }, 500);
        }
        else
        {
            var col = setTimeout(() => {
                cooldown = false;
                clearTimeout(col);
            }, 500);
        }
    }
5});