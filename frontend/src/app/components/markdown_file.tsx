import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import path from "path";
import fs from 'fs';

export default async function MarkdownPage(props: any) {
    let useFilePath: boolean = false;
    if (props.file_path) {
        useFilePath = true;
    }
    let content: string = "";
    if (useFilePath) {
        const filePath = path.join(process.cwd(), props.file_path);
        content = fs.readFileSync(filePath,'utf-8');
    } else {
        content = props.text;
    }

    return(
        <>

        <Markdown remarkPlugins={[remarkBreaks]} >{content.replace(/\n/gi, "&nbsp; \n")}</Markdown>

        </>
    )
}
