import Typography from "@/app/ui/library/Typography";
import { BlogPost } from '@/app/types/blogs';
import Link from 'next/link';
import { blogPosts } from '@/app/blogs';

const BlogPreview = ({ post }: { post: BlogPost }) => {
  return (
    <article className="border-b pb-8">
      <Typography.H5>
        <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
          {post.title}
        </Link>
      </Typography.H5>
      <Typography.Body className="mt-2 text-gray-600">
        {post.excerpt}
      </Typography.Body>
      <Typography.Body className="mt-4 text-gray-500">
        {new Date(post.date).toLocaleDateString()}
      </Typography.Body>
    </article>
  )
}

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Typography.H3>Devlogs</Typography.H3>
      <div className="mt-8 space-y-8">
        {blogPosts.map((post) => (
          <BlogPreview key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

