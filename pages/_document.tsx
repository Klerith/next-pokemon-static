import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  
  static async getInitialProps( ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { 
        ...initialProps,
        styles: <>{initialProps.styles}</>
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="es">
        <Head>
            { CssBaseline.flush() } 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
