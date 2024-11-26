import localFont from "next/font/local";
import {Work_Sans} from "next/font/google"
/* -- Styles --*/
import "./styles/globals.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable:"--font-work-sans",
  weight: ['100','200','300','400','500','600','700','800','900']
});

const mansory = localFont({
  src:[
    {
      path: './fonts/Mansory.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Mansory-Oblique.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/Mansory-Semi-Bold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Mansory-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Mansory-Medium-Oblique.otf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/Mansory-Semi-Bold-Oblique.otf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './fonts/Mansory-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Mansory-Bold-Oblique.otf',
      weight: '700',
      style: 'italic'
    },
  ],
  variable:"--font-mansory",
  weight: ['100','200','300','400','500','600','700','800','900']
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ventum",
  description: "Ventum es un edificio de apartamentos en Barranquilla, Colombia. Conoce más sobre nosotros y nuestros apartamentos.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${work_sans.variable} ${mansory.variable}`}>
      <NavBar />
            {children}
        <Footer />
      </body>
    </html>
  );
}
