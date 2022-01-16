async function fetchAPI(query, variables) {
    // remember to include all params
    const res = await fetch(
        "https://api-eu-central-1.graphcms.com/v2/ckybnnal91m9c01z1arw9hv3m/master",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    );
    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API"); //stack trace is really poor - look carefully for errors in this file.
    }

    return json.data;
}


export async function getMatchPrograms() {
    const data = await fetchAPI(
        `
        query MyQuery {
            matchPrograms {
              matchesInProgram {
                ... on Match {
                  id
                  awayTeam
                  awayTeamCurrentPosition
                  awayTeamScore
                  homeTeam
                  homeTeamCurrentPosition
                  homeTeamScore
                  leagueName
                  dateAndTime
                }
              }
            }
          }           
        `

    );
    return data;
}