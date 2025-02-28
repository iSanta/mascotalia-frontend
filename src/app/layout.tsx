import type { Metadata } from "next";
import Provider from "@/Infrastructure/state-managment/Provider";
import ThemeProvider from "@/Presentation/design-system/ThemeProvider";

export const metadata: Metadata = {
  title: "Mascotalia",
  description: "Mascotalia",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Provider>
        <body>{children}</body>
      </Provider>
    </ThemeProvider>
  );
}
