import './globals.css';

import { Epilogue } from 'next/font/google';
import type { Metadata } from 'next';
import { ReduxProvider } from './store/reduxProvider';

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Todo app',
  description: 'Single todo app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${epilogue.variable} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
