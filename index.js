var myHeaders = new Headers()
myHeaders.append('Authorization', 'Bearer keyq5qUzVKaxdQY45')

var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
}

var myRequest = new Request(
  'https://api.airtable.com/v0/appF2nPR1LCQnzRtY/Valuation%20Requests/recSLVnYo4eIP6iv6',
  myInit,
)

async function foo() {
  const res = await fetch(myRequest)
  obj = await res.json()
  return obj
}

const cyObj = {}
const y1Obj = {}
const y2Obj = {}
const y3Obj = {}

foo().then((response) => {
  const keys = Object.keys(response.fields)
  const cyArr = keys.filter((key) => key.includes('CY')).sort()
  const y1Arr = keys.filter((key) => key.includes('Y1')).sort()
  const y2Arr = keys.filter((key) => key.includes('Y2')).sort()
  const y3Arr = keys.filter((key) => key.includes('Y3')).sort()

  cyArr.map((key) => {
    cyObj[key] = response.fields[key]
  })
  y1Arr.map((key) => {
    y1Obj[key] = response.fields[key]
  })
  y2Arr.map((key) => {
    y2Obj[key] = response.fields[key]
  })
  y3Arr.map((key) => {
    y3Obj[key] = response.fields[key]
  })

  console.log(y1Obj, y2Obj)
})
