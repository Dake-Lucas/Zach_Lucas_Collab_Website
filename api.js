async function getPlayerInfo(playerTag) {
    const formattedTag = playerTag.replace("#", "%23");
    try {
        const response = await fetch(`https://api.brawlstars.com/v1/players/${formattedTag}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjlhZDgzYTQyLTdhMTItNDJkZi05ZDkyLTk5OWVjM2IxMTBlYSIsImlhdCI6MTc0MjMxODc0MCwic3ViIjoiZGV2ZWxvcGVyLzg4MzU4NDAyLThhZTgtYWQyNS03NjZkLThlOWI3MzhkOWFiOCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTk4LjMwLjE4MC4xMDQiXSwidHlwZSI6ImNsaWVudCJ9XX0.04FWrmc1sNEwG_Hh0ZYvr9gE3_DtbGoOXt5t27E7YnNntXqI3HDXkb4pj1PF1UQwppQmlMRSegQtx7tf6bq0VQ' // Replace with your actual API token
            }
        });

        if (!response.ok) {
            if (response.status == 404){
                throw new Error('Player not found.');
            } else {
               throw new Error('Network response was not ok ' + response.statusText); 
            }
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching player info:', error);
        throw error; // Re-throw the error to be handled in script.js
    }
}
