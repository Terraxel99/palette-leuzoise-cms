import { GlobalConfig } from "payload/types";

const Homepage: GlobalConfig = {
    slug: "home",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
            localized: true,
        },
    ],
};

export default Homepage;