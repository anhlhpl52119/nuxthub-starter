export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const deleteUser = await useDrizzle().delete(tables.users).where(and(
    eq(tables.users.id, Number(id)),
  )).returning().get()

  if (!deleteUser) {
    throw createError({
      statusCode: 404,
      message: 'Todo not found',
    })
  }
  return deleteUser
})
