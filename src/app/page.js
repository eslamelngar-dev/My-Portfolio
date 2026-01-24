"use client";
import NavBar from "@/components/Layouts/NavBar";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <NavBar />

      <section className="relative min-h-dvh pt-20 bg-[url('/background.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="overlay absolute inset-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-4">
          <div className="hero-content mt-15">
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                fontSize: { xs: "5rem", sm: "6rem", md: "5rem", lg: "7rem" },
              }}
            >
              <span style={{ color: "white" }}>Front End</span>
              <span className="nice">Developer</span>
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: "var(--font-inter)",
                color: "white",
                textAlign: "center",
                lineHeight: 1.6,
                mt: 2,
                maxWidth: { xs: "90%", sm: "80%", md: "56rem" }, // صح هنا كمان
                mx: "auto", // لتوسيط النص
              }}
            >
              Crafting clean, responsive web experiences is my passion. Using
              <span className="nice mx-1 font-semibold">React</span> and
              <span className="nice ml-1 font-semibold">JavaScript</span>, I
              transform ideas into dynamic websites and applications.
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
}
