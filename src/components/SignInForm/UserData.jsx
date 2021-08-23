import React from "react";
import {Button, TextField} from "@material-ui/core";

function UserData() {
    return (
        <form>
            <TextField id='email' label='email' type='email' variant='outlined' margin='normal' fullWidth/>
            <TextField id='senha' label='senha' type='password' variant='outlined' margin='normal' fullWidth/>
            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default UserData;