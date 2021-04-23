import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Recipes from "./ components/Recipes";
import Recipe from "./ components/Recipe";
import Basket from "./ components/Basket";

// Create a React Query client
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="container p-4 mx-auto">
                    <Switch>
                        <Route path="/" exact component={Recipes} />
                        <Route path="/recipie/:id" component={Recipe} />
                        <Route path="/basket/:id" component={Basket} />
                    </Switch>
                    <ReactQueryDevtools initialIsOpen={false} />
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
