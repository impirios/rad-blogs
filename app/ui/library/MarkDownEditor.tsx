import Markdown from 'react-markdown'
import Typography from './Typography'


const componentMap = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Typography.H4 {...props} />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Typography.H5 {...props} />,
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Typography.H6 {...props} />,
    body: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Typography.Body {...props} />,

}

const MarkdownEditor = ({ mdContent }) => {
    return <Markdown components={componentMap}>{mdContent}</Markdown>
}


export default MarkdownEditor