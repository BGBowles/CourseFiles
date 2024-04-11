const Account = () => {
    return (
        <h1>Account Component
            <br/>
            {JSON.stringify(context.users)}
        </h1>
    );
}