let verif = new Boolean(true);

while (verif == true) {
    let alunosNotas = []
    let choice = 0
    let cnt = 0
    let notas = 0
    let qtd = 0
    let mediaFinalT = 0
    
    choice = parseInt(prompt("Digite qual opção você deseja escolher: (1)Verificar notas da turma\n(2)Sair"))
    
    if(choice != 1 && choice != 2){
        alert("Resposta incorreta, tente apenas 1 ou 2.")
    }

    if(choice == 1){
        qtd = parseInt(prompt("Digite a quantidade de alunos: "))
        for (cnt; cnt < qtd; cnt++) {
            notas = parseFloat(prompt(`Digite a nota do ${cnt + 1}º aluno: `))
            alunosNotas[cnt] = notas
            mediaFinalT += notas
        }
        console.log(alunosNotas.sort())
        alert(`A média da turma foi de: ${mediaFinalT / qtd} e a menor nota da turma, foi de ${alunosNotas[0]}`)
    }
    
    if(choice == 2){
        alert("Finalizando o programa...")
        break;
    }

}
