const enterButton = document.querySelector('.enter-button');
const playerInfoDiv = document.getElementById('playerInfo');
const playerName = document.getElementById('playerName');
const playerTagDisplay = document.getElementById('playerTagDisplay');
const playerTrophies = document.getElementById('playerTrophies');
const playerHighestTrophies = document.getElementById('playerHighestTrophies');
const playerExpLevel = document.getElementById('playerExpLevel');
const playerClub = document.getElementById('playerClub');
const playerError = document.getElementById('playerError');

enterButton.addEventListener('click', async () => {
    const playerTagInput = document.getElementById('playerTag');
    let playerTag = playerTagInput.value.trim();

    if (!playerTag.startsWith('#')) {
        playerTag = '#' + playerTag;
    }
    playerError.innerText = "";
    playerInfoDiv.classList.add("hidden");

    try {
        const data = await getPlayerInfo(playerTag);
        playerName.innerText = data.name;
        playerTagDisplay.innerText = data.tag;
        playerTrophies.innerText = data.trophies;
        playerHighestTrophies.innerText = data.highestTrophies;
        playerExpLevel.innerText = data.expLevel;
        playerClub.innerText = data.club ? data.club.name : 'None';

        playerInfoDiv.classList.remove("hidden"); 
    } catch (error) {
        playerError.innerText = error;
        playerInfoDiv.classList.remove("hidden");
    }
});
