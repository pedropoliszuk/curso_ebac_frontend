const alunos = [
    {nome: 'Pedro', nota: 10},
    {nome: 'Emilly', nota: 9},
    {nome: 'Júlia', nota: 7},
    {nome: 'João', nota: 5},
    {nome: 'Maria', nota: 4},
    {nome: 'Roberto', nota: 6},
    {nome: 'Giovani', nota: 2},
    {nome: 'Renata', nota: 8}
]

const alunosAcimaDaMedia = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAcimaDaMedia(alunos));