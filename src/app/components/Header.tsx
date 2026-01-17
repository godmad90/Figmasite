import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center">
              <BookOpen className="text-white h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
              AU Casino Guide
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}