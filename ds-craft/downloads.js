// get the div with downloads
const downloadsDiv = document.getElementById('downloads');

downloadsDiv.innerHTML = '<span>loading...</span>'; // put loading text into it

let releasesPage = 1;

const loadNextPage = () => {
	releasesPage++;
	loadReleases();
}

const loadPrevPage = () => {
	releasesPage--;
	if (releasesPage < 1)
		releasesPage = 1;
	loadReleases();
}

let apiResponse;

const loadReleases = () => {
	fetch('https://api.github.com/repos/IAmMoltony/ds-craft/releases?page=' + releasesPage, {
		// get json
	    method: 'get',
	    headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	    }
	}).then(resp => {
		apiResponse = resp;
		resp.json().then(json => {
		    downloadsHtml = '<p><a href="javascript:void(0);" onclick="loadPrevPage();">&lt; Previous</a> | <a href="javascript:void(0);" onclick="loadNextPage();">Next &gt;</a>&nbsp;&nbsp;Page ' + releasesPage + '</p>'; // page navigation
	
		    json.forEach((release, index) => {
				// if index is 0 then its latest version
				let latestText = index == 0 ? '(<span style="color: lime">latest</span>)' : '';
	
				// latest release is only on 1st page
				if (releasesPage != 1)
					latestText = '';
	
		        downloadsHtml += `${release.name} ${latestText} - <a href="${release.assets[0].browser_download_url}">Download</a> | <a href="${release.zipball_url}">Source Code (.zip)</a> | <a href="${release.html_url}">View on GitHub</a><hr class="downloads-separator">`;
		    });
		    downloadsDiv.innerHTML = downloadsHtml;
		});
	})
	.catch(err => {
		// error
	    downloadsDiv.innerHTML = '<span>Unable to recieve downloads info. Please check the console.</span>';
    	console.log('Error lmao\n' + err);
	});
}

loadReleases();
