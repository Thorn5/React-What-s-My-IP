import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import { borderBottom } from "@mui/system";
import { useEffect, useState } from "react";

const Team = () => {

  const [team, setTeam] = useState([
    {
      name: 'Alessandra Aparecida da Silva',
      githubName: 'alessandraapds'
    },
    {
      name: 'Trygve Horn',
      githubName: 'Thorn5'
    },
    {
      name: 'Joan Claverol',
      githubName: 'JoanClaverol'
    }
  ]);

  const [teamInfo, setTeamInfo] = useState([]);
  const gitHubUrl = "https://api.github.com/users/";

  useEffect(() => {
    function fetchData() {
      team.forEach((member) => {
        fetch(gitHubUrl + member.githubName)
          .then((response) => response.json())
          .then((data) => {
            setTeamInfo([...teamInfo, data]);
          })
          .catch(() => console.log("error message"))
          .finally(() => console.log("loading"));
      });
    }
    fetchData();
  }, [team, gitHubUrl]);

  return (
    <Grid container spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        margin: '0 auto',
        maxWidth: '800px',
      }}>
      {teamInfo.map((member) => (
        <Grid item xs={6} key={member.id}>
          <Card>
            <CardMedia component="img"
              image={member.avatar_url}
              sx={{
                height: 300,
                width: 300,
                margin: 'auto',
                borderRadius: '50%',
                // add bottom margin
                marginBottom: '1rem',
                marginTop: '1rem',
              }} />
            <CardContent
              sx={{
                textAlign: 'center',
                backgroundColor: '#f5f5f5'
              }}
            >
              <h1>{member.name}</h1>
            </CardContent>
            <CardActions
              sx={{
                // format the link to a github as a button
                textAlign: 'center',
                backgroundColor: '#f5f5f5'
              }}>
              <h2>{member.login}</h2>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Team;
