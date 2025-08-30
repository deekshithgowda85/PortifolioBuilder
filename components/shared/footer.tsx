import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Project</h3>
            <ul className="space-y-2">
              <li><Link href="/landing/edit" className="text-white/60 hover:text-white transition-colors">Visual Editor</Link></li>
              <li><Link href="/landing" className="text-white/60 hover:text-white transition-colors">Live Page</Link></li>
              <li><Link href="/pages" className="text-white/60 hover:text-white transition-colors">All Pages</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/profile" className="text-white/60 hover:text-white transition-colors">Profile</Link></li>
              <li><Link href="/dashboard" className="text-white/60 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/pages" className="text-white/60 hover:text-white transition-colors">My Pages</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/landing/edit" className="text-white/60 hover:text-white transition-colors">Page Builder</Link></li>
              <li><Link href="/profile" className="text-white/60 hover:text-white transition-colors">Settings</Link></li>
              <li><Link href="/dashboard" className="text-white/60 hover:text-white transition-colors">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.puckeditor.com/docs" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://github.com/deekshithgowda85/PortifolioBuilder" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">GitHub</a></li>
              <li><Link href="/dashboard" className="text-white/60 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">© 2024 Portfolio Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
