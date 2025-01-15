import { Poppins } from "next/font/google";
import { ApiProvider } from "@/context/ApiContext";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-gray-grayLight`}>
        <ApiProvider>{children}</ApiProvider>

        <footer className="text-center p-4 text-sm text-gray-500 bg-white">
          © 2023 | Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
