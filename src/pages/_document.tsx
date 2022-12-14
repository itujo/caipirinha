import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='application-name' content='Anjun Brasil' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Anjun Brasil' />
        <meta name='description' content='Management module for Anjun Brasil' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/touch-icon-ipad.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/touch-icon-iphone-retina.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/icons/touch-icon-ipad-retina.png'
        />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/assets/favicon.svg' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://anjunbrasil.com.br' />
        <meta name='twitter:title' content='Anjun Brasil' />
        <meta
          name='twitter:description'
          content='Management module for Anjun Brasil'
        />
        <meta
          name='twitter:image'
          content='https://french-fries.vercel.app/icons/android-chrome-192x192.png'
        />
        <meta name='twitter:creator' content='@itujo' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Anjun Brasil' />
        <meta
          property='og:description'
          content='Management module for Anjun Brasil'
        />
        <meta property='og:site_name' content='Anjun Brasil' />
        <meta property='og:url' content='https://french-fries.vercel.app' />
        <meta
          property='og:image'
          content='https://french-fries.vercel.app/icons/apple-touch-icon.png'
        />

        <link href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link href='/images/apple_splash_750.png' sizes='750x1334' />
        <link href='/images/apple_splash_640.png' sizes='640x1136' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
