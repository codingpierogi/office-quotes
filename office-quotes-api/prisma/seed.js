const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.quote.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      content: 'And I knew exactly what to do. But in a much more real sense, I had no idea what to do.',
      author: 'Michael Scott'
    },
  })
  await prisma.quote.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      content: 'I am running away from my responsibilities. And it feels good.',
      author: 'Michael Scott'
    },
  })
  await prisma.quote.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      content: 'Today, smoking is going to save lives.',
      author: 'Dwight Schrute'
    },
  })
  await prisma.quote.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      content: 'Identity theft is no a joke, Jim! Millions of families suffer every year.',
      author: 'Dwight Schrute'
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })