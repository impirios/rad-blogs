import Typography from "@/app/ui/library/Typography";
import { BlogPost } from "@/app/types/blogs";

export const BlogBanner = ({ post }: { post: BlogPost }) => {
    return <>
        <Typography.H3>{post.title}</Typography.H3>
        <Typography.Body className="mt-4 text-gray-500">
            {new Date(post.date).toLocaleDateString()}
        </Typography.Body>

    </>
}

