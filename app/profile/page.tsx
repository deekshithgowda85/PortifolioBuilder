import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PageLayout from '@/components/shared/page-layout';

export const metadata: Metadata = {
  title: 'Profile - Portfolio Builder',
  description: 'Manage your profile settings',
};

export default function ProfilePage() {
  return (
    <PageLayout>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Profile Settings</h1>
          <p className="text-white/70">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture */}
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Profile Picture</CardTitle>
              <CardDescription className="text-white/70">Update your profile photo</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">Change Photo</Button>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Personal Information</CardTitle>
                <CardDescription className="text-white/70">Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input id="firstName" placeholder="Deekshith" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input id="lastName" placeholder="Gowda" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="deekshith@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <Label htmlFor="bio" className="text-white">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Professional Information</CardTitle>
                <CardDescription className="text-white/70">Your professional details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Job Title</Label>
                  <Input id="title" placeholder="Full Stack Developer" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input id="company" placeholder="Your Company" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <Label htmlFor="website" className="text-white">Website</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <Label htmlFor="github" className="text-white">GitHub</Label>
                  <Input id="github" placeholder="https://github.com/deekshithgowda85" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">Cancel</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">Save Changes</Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
