import { GoogleSpreadsheet } from 'google-spreadsheet'
const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

export default async (req, res) => {
  if(!req.body) {
    res.status(500).send("Corpo da requisição necessário")
  }
  const parsedBody = JSON.parse(req.body);
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.SECRET_KEY,
    })
    await doc.loadInfo()
    const daily = await doc.sheetsByTitle.juridical
    await daily.addRow(parsedBody)
    res.status(200).send('Cadastrado com sucesso!')
  } catch (error) {
    res.status(500).send(error)
  }
}
