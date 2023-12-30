import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";
import {Inter} from "next/font/google";
import NavBar from "@/components/Header/NavBar";
import Container from '@mui/material/Container';


const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "KotzenPlotz",
    description: "Hier wird richtig abgekotzt",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <ThemeRegistry>
            <body className={inter.className}>
            <NavBar/>
            <Container maxWidth="md">
                {children}
            </Container>
            </body>
        </ThemeRegistry>
        </html>
    );
}
