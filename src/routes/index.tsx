import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toTitleCase } from '@/lib/utils';
import { ROUTES } from '@/router';
import { useMemo } from 'react';

export function HomePage() {
  const pages = useMemo(() => ROUTES[0].children.filter(c => c.path).map(c => ({
    label: toTitleCase(c.path!),
    path: c.path!,
  })), [ROUTES])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
          <CardDescription>Topics to explore</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="list-disc pl-6">
          {pages.map(p => <li key={p.label} className="pl-2"><a href={p.path}>{p.label}</a></li>)}
        </ul>
        </CardContent>
      </Card>
    </div>
  )
}
