import Layout from "@/app/components/Layout/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isContactPage = router.pathname === '/contact-us';

  return (
    <QueryClientProvider client={queryClient}>
      <Layout isContactPage={isContactPage}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
