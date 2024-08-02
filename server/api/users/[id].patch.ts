export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { userName } = await readBody(event)

  const user = await useDrizzle().update(tables.users).set({
    name: userName,
  }).where(eq(tables.users.id, Number(id))).returning().get()

  return user
})
