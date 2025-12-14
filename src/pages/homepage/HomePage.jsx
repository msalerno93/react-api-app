import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../../components/search/SearchBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonComponent from "../../components/button/ButtonComponent";

function HomePage() {
  const pokemon = [
    {
      name: "Pikachu",
      type: "electric",
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "Squirtle",
      type: "water",
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    },
    {
      name: "Bulbasaur",
      type: "leaf",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Pok%C3%A9mon_Bulbasaur_art.png/250px-Pok%C3%A9mon_Bulbasaur_art.png",
    },
    {
      name: "Charmander",
      type: "fire",
      image: "https://img.pokemondb.net/artwork/large/charmander.jpg",
    },
    {
      name: "Abra",
      type: "psychic",
      image: "https://img.pokemondb.net/artwork/large/abra.jpg",
    },
    {
      name: "Kadabra",
      type: "psychic",
      image:
        "https://static.pokemonpets.com/images/monsters-images-800-800/64-Kadabra.webp",
    },
  ];

  return (
      <Container
        sx={{
          bgcolor: "white",
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
          height: "100vh",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "black", fontWeight: "bold", fontFamily: "cursive" }}
        >
          Pokemon Search
        </Typography>
        <Typography variant="h6" sx={{ color: "black", fontFamily: "cursive" }}>
          Search for a Pokemon and click on them to view their information!
        </Typography>
        <SearchBar></SearchBar>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ paddingBottom: "10px" }}
          >
            {pokemon.map((pokemon, i) => {
              return (
                <Grid
                  key={i}
                  size={{ xs: 2, sm: 4, md: 3 }}
                  sx={{ bgcolor: "red", textAlign: "center" }}
                >
                  <Typography variant="h5">{pokemon.name}</Typography>

                  <img
                    width={100}
                    height={100}
                    src={pokemon.image}
                    alt="pokemon"
                  />

                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <ButtonComponent buttonName={`${pokemon.name} Details`} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Container>
  );
}

export default HomePage;
