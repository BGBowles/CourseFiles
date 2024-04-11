function Deposit(){

  const context = React.useContext(UserContext);
  
  return(
    <h1>
      Deposit (React Component)
      <br/>
      {JSON.stringify(context.users)}
    </h1>
  );
}