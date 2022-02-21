import React from "react";
import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document";


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="zh">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

// class MyDocument extends Document {
//     static async getInitialProps(ctx) {
//         const initialProps = await Document.getInitialProps(ctx)
//         return {...initialProps}
//     }
//
//     render() {
//         return (

//         )
//     }
// }
