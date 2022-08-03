import React, { useEffect } from 'react'
import { Client, APIErrorCode } from "@notionhq/client";

const HomeTab = () => {

    const myPage = async () => {
        const notion = new Client({ auth: "process.env.NOTION_API_KEY" });
        const databaseId = "fc8ba30710804a47a8eb5a09f631a2dc";
        try {
            const myPage1 = await notion.databases.query({
                database_id: databaseId,
                // filter: {
                //     property: "Landmark",
                //     rich_text: {
                //         contains: "Bridge",
                //     },
                // },
                
            });
            console.log(myPage1);
        } catch (error) {
            if (error.code === APIErrorCode.ObjectNotFound) {
    
            } else {
                // Other error handling code
                console.error(error)
            }
        }

    }
    useEffect(() => {
        myPage();
    }, [])

    return (
        <>

        </>
    )
}

export default HomeTab