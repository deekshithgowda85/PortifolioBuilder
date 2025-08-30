import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPage } from '@/lib/get-page';
import PageLayout from '@/components/shared/page-layout';

export const metadata: Metadata = {
  title: 'My Pages - Portfolio Builder',
  description: 'Manage all your created pages',
};

// This would typically come from a database
const getAllPages = () => {
  // For now, let's return some example pages
  // In a real app, you'd read from your database
  return [
    {
      path: '/landing',
      title: 'Main Landing Page',
      status: 'published',
      lastEdited: '2 hours ago',
      description: 'Your main portfolio landing page'
    },
    {
      path: '/about',
      title: 'About Page',
      status: 'draft',
      lastEdited: '1 day ago',
      description: 'Tell your story and background'
    },
    {
      path: '/services',
      title: 'Services Page',
      status: 'published',
      lastEdited: '3 days ago',
      description: 'Showcase your services and offerings'
    },
    {
      path: '/contact',
      title: 'Contact Page',
      status: 'draft',
      lastEdited: '5 days ago',
      description: 'Let people get in touch with you'
    }
  ];
};

export default function PagesPage() {
  const pages = getAllPages();

  return (
    <PageLayout>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">My Pages</h1>
            <p className="text-white/70">Manage all your created pages and landing pages</p>
          </div>
          <Link href="/new-page/edit">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">Create New Page</Button>
          </Link>
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Card key={page.path} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{page.title}</CardTitle>
                  <Badge variant={page.status === 'published' ? 'default' : 'secondary'} className={page.status === 'published' ? 'bg-green-600' : 'bg-gray-600'}>
                    {page.status}
                  </Badge>
                </div>
                <CardDescription className="text-white/70">{page.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-white/60">
                    <p>Path: {page.path}</p>
                    <p>Last edited: {page.lastEdited}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`${page.path}/edit`} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">Edit</Button>
                    </Link>
                    <Link href={page.path} className="flex-1">
                      <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">View</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Templates */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">Quick Start Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-base text-white">Portfolio Template</CardTitle>
                <CardDescription className="text-white/70">Professional portfolio layout</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/templates/portfolio/edit">
                  <Button size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">Use Template</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-base text-white">Landing Page</CardTitle>
                <CardDescription className="text-white/70">Product or service landing page</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/templates/landing/edit">
                  <Button size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">Use Template</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-base text-white">Blog Layout</CardTitle>
                <CardDescription className="text-white/70">Blog or content-focused page</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/templates/blog/edit">
                  <Button size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">Use Template</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-base text-white">Contact Page</CardTitle>
                <CardDescription className="text-white/70">Contact form and information</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/templates/contact/edit">
                  <Button size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">Use Template</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
