fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=prezli&api_key=9fa00df2316f7ea0bc4fd2a2183e1ecb&limit=1&format=json")
    .then(response => {
        if (response.ok) {
            return response.json()
                .then(response => {
                    console.log(response);

                    const myDiv = document.createElement('div');
                    myDiv.classList.add('db-ns', 'dn', 'listeningDiv');

                    const track = response.recenttracks.track[0];
                    const line = '\u2014';
                    const quote = '\u0022';
                    const imageUrl = track.image[2]['#text'];
                    const artistTitle = track.artist['#text'] + " " + line + " " + track.name.toUpperCase();

                    const image = document.createElement('img');
                    image.classList.add('albumImage');
                    image.src = imageUrl;

                    if(imageUrl === ""){
                        image.setAttribute("src", "img/default.jpg");
                    }

                    if (response.recenttracks.track.length > 1) {
                        const myDiv2 = document.createElement('div');
                        myDiv2.classList.add('belso', 'wow', 'fadeIn');

                        const infoDiv = document.createElement('div');
                        infoDiv.classList.add('info');

                        const listenTitle = document.createElement('h1');
                        listenTitle.textContent = "What I'm listening to now:";

                        const titleText = document.createElement('div');
                        titleText.classList.add('title');
                        titleText.textContent = artistTitle;

                        infoDiv.append(listenTitle, titleText);

                        myDiv2.append(image, infoDiv);

                        myDiv.appendChild(myDiv2);
                    }

                    else {
                        const myDiv2 = document.createElement('div');
                        myDiv2.classList.add('belso2', 'wow', 'fadeIn');

                        const infoDiv = document.createElement('div');
                        infoDiv.classList.add('info2');

                        const listenTitle = document.createElement('h1');
                        listenTitle.textContent = "What I was listening to recently:";

                        const titleText = document.createElement('div');
                        titleText.classList.add('title');
                        titleText.textContent = artistTitle;

                        infoDiv.append(listenTitle, titleText);

                        myDiv2.append(image, infoDiv);

                        myDiv.appendChild(myDiv2);

                    }

                    const footer = document.getElementById('projects');
                    const credit = document.getElementById('contact');

                    footer.insertBefore(myDiv, credit);

                });
        }
        return response.json().then(error => console.log('Error: ' + error));
    });