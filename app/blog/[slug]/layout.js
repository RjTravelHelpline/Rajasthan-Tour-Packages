import { blogs } from '@/data/Blogs';
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: blog.title.slice(0, 4) + '...',
      description: blog.description.slice(0, 25) + '...',
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: blog.canonical,
    },
    keywords: blog.keywords,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://www.rajasthantourpackages.in/blog/${blog.slug}`,
      images: [blog.image],
      site_name: 'Rajasthan Tour Packages',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
      site: '@rajasthantourpackages',
    },
  };
}
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
