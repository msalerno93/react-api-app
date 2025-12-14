import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ButtonComponent from "../../components/button/ButtonComponent";

const ShowPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // allow absolute positioning inside
      }}
    >
      {/* Back button in upper left */}
      <Box sx={{ position: "absolute", top: 16, left: 16 }}>
        <ButtonComponent buttonName="Back"></ButtonComponent>
      </Box>

      <Box
        sx={{
          width: 350,
          bgcolor: "#faed61ff",
          border: "4px solid #fdd835",
          borderRadius: 4,
          padding: 2,
          boxShadow: 4,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ color: "black" }}>
            Pikachu
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
            60 HP ⚡
          </Typography>
        </Box>

        {/* Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          <img
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
            alt="Pikachu"
            style={{ width: "75%", height: "auto" }}
          />
        </Box>

        {/* Stats */}
        <Typography variant="body2" gutterBottom sx={{ color: "black" }}>
          <strong>No. 025</strong> — Mouse Pokémon<br />
          <strong>Height:</strong> 1'4" &nbsp;&nbsp; <strong>Weight:</strong> 13.2 lbs.
        </Typography>

        <Divider sx={{ my: 1 }} />

        {/* Abilities */}
        <Typography variant="body2" gutterBottom sx={{ color: "black" }}>
          <strong>Energize:</strong> Attach a ⚡ Energy card from your discard pile to this Pokémon.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: "black" }}>
          <strong>Electro Ball:</strong> ⚡⚪⚪ → 30 damage
        </Typography>

        {/* Weakness/Resistance/Retreat */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography variant="body2" sx={{ color: "black" }}>
            <strong>Weakness:</strong> ×2 🥋
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            <strong>Resistance:</strong> —
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            <strong>Retreat:</strong> ⚪
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Flavor Text */}
        <Typography variant="caption" fontStyle="italic" sx={{ color: "black" }}>
          “When Pikachu meet, they'll touch their tails together and exchange electricity through them as a form of greeting.”
        </Typography>
      </Box>
    </Container>
  );
};

export default ShowPage;
