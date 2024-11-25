import { blogs } from '@/data/Blogs';


export const metadata = {
  title: 'Rajasthan Wildlife Trails for Adventurers | Rajasthan Tour Packages',
  description:
    'Check out exciting wildlife tours in Rajasthan with Rajasthan Tour Packages. Explore Ranthambore, Sariska and lots more for a close glimpse of the wild.',
};

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
