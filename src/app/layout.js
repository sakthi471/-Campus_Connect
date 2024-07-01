import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/providers/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campus Connect",
  description: "Campus Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" w-full flex flex-col min-h-screen  justify-between items-center ">
            <Navbar />
            {children}
            <Toaster />
            <Footer/>
          </div>

        </ThemeProvider>

      </body>
    </html>
  );
}
