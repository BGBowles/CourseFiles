function Balance(){

    const context = React.useContext(UserContext);
    
    return (
        <h1>
          Balance Component
          <br/>
          {JSON.stringify(context.users)}
        </h1>
    );
  }