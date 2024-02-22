import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Locator from './features/Locator'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Locator />
    </QueryClientProvider>
  )
}

export default App
