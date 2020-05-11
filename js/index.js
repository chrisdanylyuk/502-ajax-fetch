document.querySelector('.timestamp').innerText = new Date().toLocaleTimeString();

document.querySelector('.get-html-ajax').addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

async function fetchHtml() {
    //fetch('client-data.html')
    //  .then( response => response.text() )
     //   .then( html => document.querySelector('.html-container').innerHTML = html );
    const response = await fetch('client-data.html');
    document.querySelector('.html-container').innerHTML = await response.text();
}
