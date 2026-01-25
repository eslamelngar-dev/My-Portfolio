import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";

export default function SkillCard({ icon, title }) {
  return (
    <Card
      className="skill-card"
      sx={{
        background: "#111f2c",
        width: { xs: "100px", sm: "300px", md: "350px" },
        borderRadius: "16px",
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            py: 3,
          }}
        >
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
          />
          <Typography variant="h5" component="div" sx={{ color: "white" }} fontSize={{
            xs:"1rem",
            sm:"2rem",
            md:"2rem",
          }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
