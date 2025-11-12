import { BrowserRouter, Routes, Route } from "react-router";
import ClubPage from "./components/ClubPage";
import ClubCollection from "./components/ClubCollection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { ErrorBoundary } from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import './App.css'

// i know this is really overkill for a simple app :sob: but i was bored
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } }
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: window.localStorage,
});

export default function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: asyncStoragePersister
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<ErrorPage />}>
            <Routes>
              <Route path="/">
                <Route index element={<ClubCollection />} />
                <Route path="clubs/:id" element={<ClubPage />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </QueryClientProvider>
      </BrowserRouter>
    </PersistQueryClientProvider>
  );
}
