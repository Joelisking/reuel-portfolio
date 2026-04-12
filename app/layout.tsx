import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reuel Agyapong — Interior Designer',
  description:
    'Portfolio of Reuel Agyapong. Interior design, spatial planning, and architectural visualization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
