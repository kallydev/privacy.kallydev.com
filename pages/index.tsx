import type {NextPage} from "next";
import Content from "../posts/index.mdx";
import {DiscussionEmbed} from "disqus-react";

const Home: NextPage = () => {
    return (
        <div>
            <div className="container m-auto max-w-screen-md p-4 pt-8 space-y-10">
                <article className="markdown-body leading-loose">
                    <Content/>
                </article>
                <div>
                    <DiscussionEmbed
                        shortname="privacy-protection"
                        config={
                            {
                                url: process.env.NEXT_PUBLIC_SITE_URL,
                                title: process.env.NEXT_PUBLIC_SITE_TITLE
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
