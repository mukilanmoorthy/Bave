export default function RootLayout({children}){
  return(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* PWA primary meta tags */}
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#2b6cb0"/>
        <meta name="application-name" content="Bave — Link Hub" />
        <meta name="description" content="Save and share link cards" />
        
        {/* Apple specific tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bave" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
        
        {/* Microsoft/Windows PWA support */}
        <meta name="msapplication-TileColor" content="#2b6cb0" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Mobile format detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* PWA icon links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
};
