import Airtable from 'airtable'

export const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_PORTFOLIO_BASE as string)

export const tableData = async (tableName: string) => {
	const res = (await base(tableName).select().firstPage()).map(
		({ fields, id }) => ({ id, ...fields })
	)

	return res
}
