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

let data

data = foo().then((response) => {
  return Object.keys(response.fields)
})

console.log(data)
