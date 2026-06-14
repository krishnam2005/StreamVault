import "./globals.css";
import Provider from "../providers/SessionProvider";

export const metadata = {
  title: "StreamVault",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}