"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export default function Footer() {
  return (
    <Box
      id="Contact"
      component="footer"
      sx={{
        backgroundColor: "#1c2e40",
        color: "#ccc",
        pt: 6,
        pb: 6,
        px: { xs: 3, md: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xlg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" sx={{ mb: 1, color: "var(--niceColor)" }}>
              Eslam Elngar
            </Typography>
            <Typography variant="body2">Phone: 01552762205</Typography>
            <Typography variant="body2">
              Email: eslamelngar666@gmail.com
            </Typography>
          </Box>

          <Box>
            <Link href="#Home">
              <Button
                startIcon={<ArrowUpwardRoundedIcon />}
                variant="contained"
                sx={{
                  backgroundColor: "rgb(10, 20, 31)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgb(25, 55, 86)" },
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                Back To Top
              </Button>
            </Link>
          </Box>
        </Box>

        <hr
          style={{ borderColor: "rgb(125, 138, 144)", marginBottom: "24px" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", gap: 3, mb: { xs: 2, md: 0 } }}>
            <Link
              href="#Home"
              sx={{ 
                color: "#ccc",textDecoration:"none",
                "&:hover": { color: "var(--niceColor)" },
              }}
            >
              Home
            </Link>
            <Link href="#About" sx={{ 
                color: "#ccc",textDecoration:"none",
                "&:hover": { color: "var(--niceColor)" },
              }}>
              About
            </Link>
            <Link href="#Portfolio" sx={{ 
                color: "#ccc",textDecoration:"none",
                "&:hover": { color: "var(--niceColor)" },
              }}>
              Portfolio
            </Link>
            <Link href="#Contact" sx={{ 
                color: "#ccc",textDecoration:"none",
                "&:hover": { color: "var(--niceColor)" },
              }}>
              Contact
            </Link>
          </Box>

          <Box>
            <IconButton
              href="https://github.com/eslamelngar-dev"
              sx={{ 
                color: "#ccc",textDecoration:"none",
                "&:hover": { color: "var(--niceColor)" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/eslam-elngar-033611373/"
              sx={{ 
                color: "#ccc",textDecoration:"none",
                "&:hover": { color: "var(--niceColor)" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body2" textAlign="center" sx={{ color: "#888" }}>
          &copy; {new Date().getFullYear()} Eslam Elngar. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
