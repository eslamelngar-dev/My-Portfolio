"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <Box
    id="Contact"
      component="footer"
      sx={{
        backgroundColor: "#2b2b2b",
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
            <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
              Contact Us
            </Typography>
            <Typography variant="body2">Phone: 01552762205</Typography>
            <Typography variant="body2">
              Email: eslamelngar666@gmail.com
            </Typography>
          </Box>

          <Box>
            <Link href="/login">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": { backgroundColor: "#cc0000" },
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                Subscribe Now
              </Button>
            </Link>
          </Box>
        </Box>

        <hr style={{ borderColor: "#444", marginBottom: "24px" }} />

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
            <Link href="#home" underline="hover" sx={{ color: "#ccc" }}>
              Home
            </Link>
            <Link href="#services" underline="hover" sx={{ color: "#ccc" }}>
              Services
            </Link>
            <Link href="#food" underline="hover" sx={{ color: "#ccc" }}>
              Food
            </Link>
            <Link href="#contact" underline="hover" sx={{ color: "#ccc" }}>
              Contact
            </Link>
          </Box>

          <Box>
            <IconButton href="#" sx={{ color: "#ccc" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#ccc" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://github.com/eslamelngar-dev" sx={{ color: "#ccc" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/eslam-elngar-033611373/" sx={{ color: "#ccc" }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body2" textAlign="center" sx={{ color: "#888" }}>
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
