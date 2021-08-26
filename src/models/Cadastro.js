function validarCPF(cpf) {
    if (cpf.length != 11) {
        return {valido: false, helpText: 'O CPF deve ter 11 dígitos'}
    }
    return {valido: true, helpText: ''}
}

function validarSenha(senha) {
    if (senha.length <4 || senha.length > 72) {
        return {valido: false, helpText: 'A senha deve ter entre 4 e 72 dígitos'}
    }
    return {valido: true, helpText: ''}
}

export{validarCPF, validarSenha};