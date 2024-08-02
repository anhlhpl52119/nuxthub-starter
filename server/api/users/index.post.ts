import { uuid } from 'drizzle-orm/pg-core'

export default eventHandler(async (event) => {
  const { name, email, avatar, password } = await readBody(event)
  const user = await useDrizzle().insert(tables.users).values({
    name,
    email,
    avatar,
    password,
    createdAt: new Date(),
  }).returning().get()

  return user
})
