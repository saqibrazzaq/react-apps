import { Container, Grid } from "@mui/material";
import TourCard from "./components/TourCard";

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
      </Grid>
    </Container>
  );
}

export default App;
