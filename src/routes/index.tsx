import { H1, P } from '@/components/typographic';
import { toTitleCase } from '@/lib/utils';
import { ROUTES } from '@/router';
import { useMemo } from 'react';

export function HomePage() {
  const pages = useMemo(() => ROUTES[0].children.filter(c => c.path).map(c => ({
    label: toTitleCase(c.path!),
    path: c.path!,
  })), [ROUTES])

  return (
    <div>
      <H1>Home Page</H1>
      <P>
        Topics to explore:
        <ul className="list-disc pl-6">
          {pages.map(p => <li key={p.label} className="pl-2"><a href={p.path}>{p.label}</a></li>)}
        </ul>
      </P>
    </div>
  )
}
