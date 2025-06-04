import Layout from "@/app/components/Layout/Layout";
import "@/styles/globals.css";
import { HydrationBoundary, QueryClient, QueryClientProvider, hydrate } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";



export default function App({ Component, pageProps }: AppProps) {
  
  const [queryClient] = useState(() => new QueryClient());
  
  const router = useRouter();

  const isContactPage = router.pathname === '/contact-us';

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={(pageProps as any).dehydratedState}>
        <Layout isContactPage={isContactPage}>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
