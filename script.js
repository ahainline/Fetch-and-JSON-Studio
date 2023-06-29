window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            json.sort(function(a, b) {
                return a.hoursInSpace < b.hoursInSpace;
            });

            let htmlBlock = document.getElementById('container');
            for (let i = 0; i < json.length; i++) {
                htmlBlock.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li id="status">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}"/>
                </div>
                `
                let currentStatus = document.getElementById("status");
                if (json[i].active === true) {
                    currentStatus.style.color = "green";
                }
            }
            
        });
    });
});