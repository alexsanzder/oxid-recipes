import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Products from "./ components/Products";
import Ingredients from "./ components/Ingredients";

// Create a React Query client
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1 className="font-bold">Recepies</h1>
            <Products />
            <Ingredients />
            <Steps />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
