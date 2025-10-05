export default function RootLayout({children}){
  return(
    <html>
      <head>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#2b6cb0"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
};