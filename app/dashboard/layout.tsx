import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Dashboard",
  description: "Interract with your resumes or create new resumes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html>
      <body>
        {children}
      
        
      </body>
    </html>
    
  );
}
