import { blogs } from '@/data/Blogs';
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
