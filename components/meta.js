import Head from "next/head";

export default function Meta({ keywords, description, title }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="stylesheet" href="/favicon.co" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WatchMe',
    keyword: 'movie app, free movies, popular movies',
    description: 'Watch movies for free'
}