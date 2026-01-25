import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Cards({ icon, title, description }) {
  const Icon = icon;
  return (
      <Card
        className="skill-card"
        sx={{ background: "#111f2c", width: "400px", borderRadius: "16px" }}
      >
        <CardActionArea
          sx={{
            height: "100%",
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Icon sx={{ fontSize: 50, color: "var(--niceColor)", mb: 1 }} />
            <Typography variant="h5" component="div" sx={{ color: "white" }}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "grey" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
