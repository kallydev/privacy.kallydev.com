const moment = require("moment");

module.exports = {
    siteUrl: process.env.SITE_URL,
    changefreq: "daily",
    generateRobotsTxt: true,
    additionalPaths: async () => {
        return [
            {
                loc: "/",
                changefreq: "daily",
                lastmod: moment().format("YYYY-MM-DD"),
                priority: 1.0,
            }
        ];
    }
};
