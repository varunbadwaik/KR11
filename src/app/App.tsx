
import Providers from './providers';
import AppRouter from './router';
import { MobileShell } from '../components/common';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <MobileShell>
      <Providers>
        <AppRouter />
        <Toaster duration={1500} visibleToasts={1} />
      </Providers>
    </MobileShell>
  );
}

