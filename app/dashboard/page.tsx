"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Plus, Settings, History } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your resumes and account settings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Create and manage your resumes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" asChild>
                <Link href="/resume/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Resume
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/templates">
                  <FileText className="mr-2 h-4 w-4" />
                  Browse Templates
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Resumes */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Resumes</CardTitle>
              <CardDescription>Your recently edited resumes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  No resumes created yet. Create your first resume to get started!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Account Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
              <CardDescription>Your account information and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/history">
                  <History className="mr-2 h-4 w-4" />
                  Activity History
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}