var myHeaders = new Headers()
myHeaders.append('Authorization', 'Bearer keyq5qUzVKaxdQY45')

var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
}

//  List Valuation Requests records
var myRequest = new Request(
  'https://api.airtable.com/v0/appF2nPR1LCQnzRtY/Valuation%20Requests?maxRecords=3&view=Grid%20view',
  myInit,
)

async function foo() {
  const res = await fetch(myRequest)
  obj = await res.json()
  return obj
}

const getYearObj = (keys, allowed, fields) => {
  return keys
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = fields[key]
      return obj
    }, {})
}

const formmatedClients = foo().then((response) => {
  const clients = response.records.map(({ fields }) => {
    const keys = Object.keys(fields)
    const cyKeys = keys.filter((key) => key.includes('CY')).sort()
    const y1Keys = keys.filter((key) => key.includes('Y1')).sort()
    const y2Keys = keys.filter((key) => key.includes('Y2')).sort()
    const y3Keys = keys.filter((key) => key.includes('Y3')).sort()

    return {
      clientId: fields.Client[0],
      cy: getYearObj(keys, cyKeys, fields),
      y1: getYearObj(keys, y1Keys, fields),
      y2: getYearObj(keys, y2Keys, fields),
      y3: getYearObj(keys, y3Keys, fields),
    }
  })

  return clients
})

console.log(formmatedClients)
