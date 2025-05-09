import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import BlogPost from "@/pages/BlogPost";
import BlogList from "@/pages/BlogList";
import WhatsAppButton from "@/components/WhatsAppButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogList} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <WhatsAppButton />
    </>
  );
}

export default App;
