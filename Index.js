const UserContext = React.createContext(null);

function SPA() {

  return (
    <HashRouter>
      <Navbar/>    
      <Route path="/"       exact component={Home}/>
      <Route path="/alldata/"     component={AllData}/>
      <Route path="/balance/"     component={Balance}/>
      <Route path="/deposit/"     component={Deposit}/>
      <Route path="/withdrawal/"  component={Withdrawal}/>
    </HashRouter>
  );
}

ReactDOM.render(
  <Router>
    <SPA/>
  </Router>,
  document.getElementById('root')
);