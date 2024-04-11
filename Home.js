function Home(){

  const context = React.useContext(UserContext);

  return (
  <>
    <h1>
      Home Component
      <br/>
      {JSON.stringify(context.users)}
    </h1>
  </>
  );  
}