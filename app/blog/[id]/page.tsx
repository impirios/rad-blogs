import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/blogs';
import BlogComponent from '@/app/components/blogs/BlogComponent';

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts.find(post => post.id === parseInt(params.id));

    if (!post) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto p-8">
            <BlogComponent post={post} />
        </main>
    );
}
