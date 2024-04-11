function AllData(){

  const context = React.useContext(UserContext);
  
  return (
      <h1>
        All Data (React Component)
        <br/>
        {JSON.stringify(context.users)}
      </h1>
  );
}