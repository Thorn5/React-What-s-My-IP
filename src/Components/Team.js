import { Card, CardActions, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useState } from "react";

const TEAM = [
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
];
const gitHubUrl = "https://api.github.com/users/";

const Team = () => {

  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    function fetchData() {
      TEAM.forEach((member) => {
        fetch(gitHubUrl + member.githubName)
          .then((response) => response.json())
          .then((data) => {
            console.log('data', data);
            setTeamInfo((teamInfo) => [...teamInfo, data]);
            console.log(teamInfo);
          })
          .catch(() => console.log("error message"))
          .finally(() => console.log("loading"));
      });
    }
    fetchData();
  }, []);

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
        <Grid item xs={4} key={member.id}>
          <Card>
            <CardMedia component="img"
              image={member.avatar_url}
              sx={{
                height: 150,
                width: 150,
                margin: 'auto',
                borderRadius: '50%',
                // add bottom margin
                marginBottom: '1rem',
                marginTop: '1rem',
              }} />
            <CardContent
              sx={{
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                fontSize: '0.8rem',
              }}
            >
              <h1>{member.name}</h1>
              <IconButton href={member.html_url}>
                <GitHubIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Team;
