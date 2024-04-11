function Withdrawal(){
 
  const context = React.useContext(UserContext);
  
  return(
      <h1>
        Withdrawal (React Component)
        <br/>
        {JSON.stringify(context.users)}
      </h1>     
  );
}