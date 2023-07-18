const downloadsDiv = document.getElementById('downloads');
downloadsDiv.innerHTML = '<span>loading...</span>';

fetch('https://api.github.com/repos/IAmMoltony/ds-craft/releases', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json()).then(json => {
    downloadsHtml = '';
    json.forEach((release, index) => {
        const latestText = index == 0 ? '(<span style="color: lime">latest</span>)' : '';
        downloadsHtml += `${release.name} ${latestText} - <a href="${release.assets[0].browser_download_url}">Download</a> | <a href="${release.zipball_url}">Source Code (.zip)</a> | <a href="${release.html_url}">View on GitHub</a><hr class="downloads-separator">`;
    });
    downloadsDiv.innerHTML = downloadsHtml;
})
.catch(err => {
    downloadsDiv.innerHTML = '<span>Unable to recieve downloads info.</span>';
    console.log('Error lmao\n' + err);
});
