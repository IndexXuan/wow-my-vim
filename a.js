const a = {
  "function": "\uf794",
  "method": "\uf6a6",
  "variable": "\uf71b",
  "constant": "\uf8ff",
  "struct": "\ufb44",
  "class": "\uf0e8",
  "interface": "\ufa52",
  "text": "\ue612",
  "enum": "\uf435",
  "enumMember": "\uf02b",
  "module": "\uf668",
  "color": "\ue22b",
  "property": "\ufab6",
  "field": "\uf93d",
  "unit": "\uf475",
  "file": "\uf471",
  "value": "\uf8a3",
  "event": "\ufacd",
  "folder": "\uf115",
  "keyword": "\uf893",
  "snippet": "\uf64d",
  "operator": "\uf915",
  "reference": "\uf87a",
  "typeParameter": "\uf278",
  "default": "\uf29c"
}
const keys = Object.keys(a)
keys.map(k => {
  console.log(`"${k}": "${a[k]}",`)
})
