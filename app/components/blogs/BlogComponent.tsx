import { BlogPost } from '@/app/types/blogs';
import MarkdownEditor from '@/app/ui/library/MarkDownEditor';
import { BlogBanner } from "@/app/components/blogs/utils";

const BlogComponent = ({ post }: { post: BlogPost }) => {

    return <>
        <BlogBanner post={post} />
        <MarkdownEditor mdContent={post.content} />
    </>
}


export default BlogComponent