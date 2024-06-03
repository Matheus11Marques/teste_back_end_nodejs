const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//LISTAR GET
async function todosOsRegistros(req, res) {
  const registros = await prisma.registro.findMany();
  console.log(registros);

  if (registros) {
    res.json(registros);
  }
}

//CRIAR - POST
async function registrarNovoCadastro(req, res) {
  const registro = req.body;

  if (registro) {
    const novoRegistro = await prisma.registro.create({
      data: registro,
    });

    if (novoRegistro)
      res.status(201).json({ message: 'novo registro criado com sucesso!' });
  }
}

//ATUALIZAR - PUT
const updateInfo = async (req, res) => {
  const { id } = req.params;
  const { cargo } = req.body;

  if (id) {
    const updateInformations = await prisma.registro.update({
      where: {
        id: +id,
      },
      data: {
        cargo,
      },
    });

    if (updateInformations)
      res.status(200).json({
        message: `infomações do ${id} foram atualizadas!!`,
      });
  }
};

//DELETAR - DELETE

module.exports = {
  todosOsRegistros,
  registrarNovoCadastro,
  updateInfo,
};
